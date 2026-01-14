# 🔧 Localhost Browser Issue - Fix

## Problem
Your portfolio only opens in Cursor's browser, not in Brave or other browsers.

## Solution

### Option 1: Force Open in Your Browser

When the dev server starts and shows:
```
➜  Local:   http://localhost:5173/
```

**Manually open** Brave and type in the address bar:
```
http://localhost:5173
```

Or try:
```
http://127.0.0.1:5173
```

### Option 2: Use Your Network IP

1. Find your computer's IP address:

**Windows PowerShell:**
```powershell
ipconfig
```
Look for "IPv4 Address" under your active network adapter (usually starts with 192.168.x.x)

2. Start dev server with host flag:
```bash
npm run dev -- --host
```

3. The output will show:
```
➜  Local:   http://localhost:5173/
➜  Network: http://192.168.1.XX:5173/
```

4. Open the Network URL in Brave

### Option 3: Use a Different Port

Sometimes port 5173 has issues. Try port 3000:

```bash
npm run dev -- --port 3000
```

Then open: `http://localhost:3000` in Brave

### Option 4: Check Brave Settings

1. Open Brave
2. Go to `brave://settings/shields`
3. Temporarily disable "Block scripts" for localhost
4. Try opening `http://localhost:5173` again

## Why This Happens

- Cursor browser might be set as default for development
- Brave's security settings might block localhost
- Port might be restricted by firewall

## Quick Test

After starting `npm run dev`, try opening these URLs in Brave:
- http://localhost:5173
- http://127.0.0.1:5173
- http://0.0.0.0:5173

One of them should work!

---

**Still having issues?** The dev server IS running - just copy the URL manually into Brave's address bar.
