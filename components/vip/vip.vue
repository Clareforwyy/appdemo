<template>
	 <div class="slide_box">
      <!-- 配置slider组件 -->
	      <slider :pages="pages" :sliderinit="sliderinit">
	          <!-- 设置loading,可自定义 -->
	          <div slot="loading">loading...</div>
	      </slider>
	 </div>
</template>
<script>
import slider from 'vue-concise-slider'
  export default {
    data() {
    	return {
      pages:[
         	{
	         	html: '<div class="slider1">slider1</div>',
	          	style: {
            		'background': '#1bbc9b'
            	}
          	},
	        {
	            html: '<div class="slider2">slider2</div>',
	            style: {
	              	'background': '#4bbfc3'
	            }
	        },
          	{
            	html: '<div class="slider3">slider3</div>',
            	style: {
              		'background': '#7baabe'
            	}
          	}
        ],
        //Sliding configuration [obj]
        sliderinit: {
          currentPage: 0,
          thresholdDistance: 100,
          thresholdTime: 500,
          // autoplay:1000,
          //loop:true,
          direction:'vertical',
          infinite:1,
          slidesToScroll:1,
          timingFunction: 'ease',
          duration: 300
        }
      }
    },
    methods: {
      onSliderChange(pagenum) {
        this.sliderAt = pagenum
      },
      myalert() {
        console.log('Click on ' + this.sliderAt)
      }
    },
    components: {
      slider
    }
  }
</script>
<style scoped lang='less'>

	.slide_box{
		height: 100%;
		
	}

</style>