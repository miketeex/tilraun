# Tilraun.is landing page

Static GitHub Pages landing page fyrir tilraun.is.

## Keyra local

Opnaðu `index.html` beint í browser eða notaðu einfaldan server:

```bash
npx serve .
```

## Setja á GitHub Pages

1. Búðu til nýtt repo á GitHub, t.d. `tilraun.is`
2. Settu þessar skrár inn í repo
3. Farðu í **Settings → Pages**
4. Veldu **Deploy from a branch**
5. Branch: `main`
6. Folder: `/root`
7. Save

## Tengja domain

Settu `CNAME` skrá í root með:

```txt
tilraun.is
```

Síðan stillirðu DNS hjá domaininu/Cloudflare samkvæmt leiðbeiningum GitHub Pages.
