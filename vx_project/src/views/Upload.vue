<template>
  <div>

    <div class="upload">
      <label>
        上传图片
        <input @change="uploadImg" type="file" accept="image/jpg,image/png,image/jpeg,image/gif"  multiple>
      </label>

      <div>
        <div class="box" :style="{'background-image': 'url(' + item.base64 +')'}" v-for="(item, index) in imgDatas" :key="index">
          <span @click="removeImg(index)">删除</span>
        </div>
      </div>
       
    </div>
   

  </div>
</template>



<script>

  //1MB = 1024KB * 1024 = 1048576B
  //30KB = 1024 * 30B

 import {mapState} from 'vuex'
  export default {
    name: 'upload',

    computed: {
      ...mapState({
        imgDatas: 'imgDatas'
      })
    },

    methods: {

      uploadImg(e) {

        let fileSize = 1024 * 1024;

        let self = this;

        //获取上传文件的信息
        let filesInformation = e.target.files;
        console.log('filesInformation ==> ', filesInformation);

        for (let i = 0; i < filesInformation.length; i++) {

          //判断上传大小是否大于1MB
          if (filesInformation[i].size > fileSize){
            continue;
          }

          let file = {};

          //创建读取文件对象 FileReader
          let fileReader = new FileReader();
          // console.log('fileReader ==> ', fileReader);

          file.type = filesInformation[i].type;
          file.size = filesInformation[i].size;

          //监听读取是否完成
          fileReader.onload = function () {
            // console.log(this.result);
            // console.log('读取完成');

            file.base64 = this.result;

            // console.log('file ==> ', file);

            self.$store.state.imgDatas.push(file);

          }

          //监听读取文件进度
          fileReader.onprogress = function (e) {
            //e.loaded: 已加载的进度
            //e.total: 全部进度
            let percent = e.loaded / e.total;
            console.log('percent ==> ', percent);
          }

          //读取文件
          fileReader.readAsDataURL(filesInformation[i]);

        }
      },

      removeImg(index) {
        this.$store.state.imgDatas.splice(index, 1);
      }

    }
  }
</script>

<style lang="less" scoped>
  .box{
    width: 150px;
    height: 150px;
    border: 1px solid #aaa;
    padding: 5px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-clip: content-box;
  }
  .upload{
    width: 120px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background-color: rgb(55, 90, 247);
    border-radius: 10px;
    color: #fff;
    font-size: 18px;
  }

  .upload>label{
    display: block;
    width: 120px;
    height: 44px;
  }

  .upload>label>[type="file"]{
    display: none;
  }
</style>