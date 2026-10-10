#!/usr/bin/env python3
"""Refresh shorts/videos.json (+ local thumbnails) from youtube.com/@laurencewho.
Lists only PUBLIC videos (yt-dlp flat playlist of the channel's videos + shorts tabs).
Commits and pushes ONLY if something changed.  Usage: python3 tools/update_videos.py [--no-push]"""
import json,subprocess,sys,os,io,urllib.request,datetime
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT=os.path.join(ROOT,'shorts','videos.json');TH=os.path.join(ROOT,'shorts','thumbs')
CH='https://www.youtube.com/@laurencewho'
def tab(t):
    r=subprocess.run([sys.executable,'-m','yt_dlp','--flat-playlist','-J',f'{CH}/{t}'],capture_output=True,text=True)
    if r.returncode: return None  # tab missing (e.g. no shorts) or network error
    return json.loads(r.stdout).get('entries') or []
def thumb(vid):
    os.makedirs(TH,exist_ok=True);p=os.path.join(TH,vid+'.webp')
    if os.path.exists(p): return
    from PIL import Image
    for q in ('maxresdefault','sddefault','hqdefault'):
        try:
            b=urllib.request.urlopen(f'https://i.ytimg.com/vi/{vid}/{q}.jpg',timeout=20).read()
            im=Image.open(io.BytesIO(b)).convert('RGB')
            if im.size[0]<200: continue
            w,h=im.size;th=round(w*9/16)
            if th<h: im=im.crop((0,(h-th)//2,w,(h-th)//2+th))  # strip letterbox to 16:9
            im.resize((640,360),Image.LANCZOS).save(p,quality=76,method=6);return
        except Exception: pass
def main():
    vids=tab('videos')
    if vids is None: sys.exit('could not read channel; nothing changed')
    sh=tab('shorts') or []
    items=[];seen=set()
    for kind,lst in (('video',vids),('short',sh)):
        for e in lst:
            vid=e.get('id')
            if not vid or vid in seen or e.get('availability') not in (None,'public'): continue
            seen.add(vid);thumb(vid)
            items.append({'id':vid,'title':e.get('title') or '','duration':int(e.get('duration') or 0),'kind':kind,
                          'thumbnail':f'thumbs/{vid}.webp' if os.path.exists(os.path.join(TH,vid+'.webp')) else f'https://i.ytimg.com/vi/{vid}/hqdefault.jpg'})
    old=None
    if os.path.exists(OUT):
        try: old=json.load(open(OUT))
        except Exception: pass
    if old and old.get('videos')==items: print('no change');return
    json.dump({'channel':CH,'updated':datetime.date.today().isoformat(),'videos':items},open(OUT,'w'),ensure_ascii=False,indent=1)
    for f in os.listdir(TH):  # drop thumbs of removed videos
        if f[:-5] not in seen: os.remove(os.path.join(TH,f))
    print(len(items),'videos written')
    g=lambda *a:subprocess.run(['git','-C',ROOT,*a],check=True)
    g('add','shorts/videos.json','shorts/thumbs')
    if subprocess.run(['git','-C',ROOT,'diff','--cached','--quiet']).returncode==0: print('nothing staged');return
    g('commit','-m','shorts: refresh video list from YouTube')
    if '--no-push' not in sys.argv: g('push','origin','HEAD')
main()
