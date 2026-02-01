# Deploy (Static Export)

This project builds to **100% static files** in the `/out` folder and can be hosted on AWS S3 or GitHub Pages.

## Build

```bash
npm install
npm run build
```

After build, **`out/` is the deploy folder**.

## AWS S3 (static website hosting)

```bash
aws s3 sync out/ s3://YOUR_BUCKET --delete
```


