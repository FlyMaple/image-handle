# image-handle
紀錄一些圖片相關的技術資訊

## [圖片型態轉換](%E5%9C%96%E7%89%87%E5%9E%8B%E6%85%8B%E8%BD%89%E6%8F%9B.html)

File(Blob) <---> DataURL(base64) <---> Image(DOM) <---> Canvas(DOM) 

其中 canvas 在做 data url / blob 輸出時，可以調整品質以及設定副檔名

**//  TODO  將品質 / 副檔名 實作為彈性動態**
