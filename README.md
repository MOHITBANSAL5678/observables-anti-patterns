# HTML5 Video Download Tracking Setup (GTM)

## ✅ STEP 1 --- Add this script to your page (Custom HTML Tag in GTM)

### Create a GTM Tag → Custom HTML → paste this code

``` html
<script>
(function() {
  function trackVideoDownload(video) {
    let lastPercent = 0;

    video.addEventListener("progress", function() {
      if (!video.duration || video.buffered.length === 0) return;

      const bufferedEnd = video.buffered.end(0);
      const percent = Math.floor((bufferedEnd / video.duration) * 100);

      // Fire only at intervals (for example: 10%, 20%, 30%, ...)
      if (percent >= lastPercent + 10) {
        lastPercent = percent;

        window.dataLayer.push({
          event: "video_download_progress",
          video_url: video.currentSrc,
          percent_downloaded: percent
        });
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function() {
    const videos = document.querySelectorAll("video");
    videos.forEach(trackVideoDownload);
  });
})();
</script>
```

### This script pushes events like:

    event: video_download_progress
    video_url: https://yoursite.com/video.mp4
    percent_downloaded: 10

------------------------------------------------------------------------

## ✅ STEP 2 --- Create GTM Event Trigger

-   Go to **GTM → Triggers → New**
-   Trigger Type → **Custom Event**
-   Event name:

```{=html}
<!-- -->
```
    video_download_progress

-   Trigger: **All Custom Events**
-   Save.

------------------------------------------------------------------------

## ✅ STEP 3 --- Create GA4 Event Tag

-   Go to **GTM → Tags → New**
-   Tag Type → **GA4 Event**

### Configure:

**Event Name:**

    video_download

### Parameters:

  Parameter            Value
  -------------------- ------------------------
  video_url            {{video_url}}
  percent_downloaded   {{percent_downloaded}}

------------------------------------------------------------------------

## Add Variables

Create two **Data Layer Variables**:

  Variable Name        Type                  Data Layer Key
  -------------------- --------------------- --------------------
  video_url            Data Layer Variable   video_url
  percent_downloaded   Data Layer Variable   percent_downloaded

------------------------------------------------------------------------

## 📊 What you get in GA4

You will see events like:

-   `video_download` with `percent_downloaded = 10`
-   `video_download` with `percent_downloaded = 20`
-   `video_download` with `percent_downloaded = 30`

This provides full **video download progression analytics**.
