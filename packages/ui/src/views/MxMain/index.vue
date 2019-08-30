<template lang="pug">
  el-container

    el-aside

      mx-minimap(
        v-if="focusArea"
        :original-size="imageSize"
        :focus-area="focusArea"
      )
        el-image.thumbnail(:src="imageSource")

    el-container

      el-header
        mx-toolset(
          @reset="onReset"
          @zoomin="onZoomIn"
          @zoomout="onZoomOut"
        )

      el-main
        div.no-margin.fit-fill.relative(
          ref="canvasContainer"
        )

          mx-screen-overlay(
            @drag="onDrag"
          )

            mx-display(
              v-if="canvasSize"
              :size="canvasSize"
              :image="image"
              :image-size="imageSize"
              :focus-area="focusArea"
            )

          footer.absolute.mx-details
            p {{ imageSize.x }} x {{ imageSize.y }}

</template>

<script src="./main.js"></script>

<style>
.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.no-margin {
  margin: 0;
}

.fit-fill {
  width: 100%;
  height: 100%;
}

.mx-nav {
  padding: 20px 0;
}

.mx-details {
  bottom: 0;
  width: 100%;
  padding: 20px;
  color: #ddd;
  background: rgba(255, 255, 255, 0.1)
}

.thumbnail {
  max-width: 100%;
  max-height: 100%;
}
</style>
