<template lang="html">
  <div>
    <article>
      <div class="group_layer1">
        <img src="../../../../assets/images/components/jiaju@2x.png" alt="" />
      </div>
      <div class="group_product">
        <h3>休食</h3>
        <ul class="productList">
          <li>
            <img src="../../../../assets/images/components/product@2x.png" alt="" class="product_pic" />
            <p>坚果炒货</p>
          </li>
          <li>
            <img src="../../../../assets/images/components/product@2x.png" alt="" class="product_pic" />
            <p>坚果炒货</p>
          </li>
          <li>
            <img src="../../../../assets/images/components/product@2x.png" alt="" class="product_pic" />
            <p>坚果炒货</p>
          </li>
          <li>
            <img src="../../../../assets/images/components/product@2x.png" alt="" class="product_pic" />
            <p>坚果炒货</p>
          </li>
        </ul>
        <h3>休食</h3>
        <ul class="productList">
          <li>
            <img src="../../../../assets/images/components/product@2x.png" alt="" class="product_pic" />
            <p>坚果炒货</p>
          </li>
          <li>
            <img src="../../../../assets/images/components/product@2x.png" alt="" class="product_pic" />
            <p>坚果炒货</p>
          </li>
          <li>
            <img src="../../../../assets/images/components/product@2x.png" alt="" class="product_pic" />
            <p>坚果炒货</p>
          </li>
          <li>
            <img src="../../../../assets/images/components/product@2x.png" alt="" class="product_pic" />
            <p>坚果炒货</p>
          </li>
        </ul>
        <h3>休食</h3>
        <ul class="productList">
          <li>
            <img src="../../../../assets/images/components/product@2x.png" alt="" class="product_pic" />
            <p>坚果炒货</p>
          </li>
          <li>
            <img src="../../../../assets/images/components/product@2x.png" alt="" class="product_pic" />
            <p>坚果炒货</p>
          </li>
          <li>
            <img src="../../../../assets/images/components/product@2x.png" alt="" class="product_pic" />
            <p>坚果炒货</p>
          </li>
          <li>
            <img src="../../../../assets/images/components/product@2x.png" alt="" class="product_pic" />
            <p>坚果炒货</p>
          </li>
        </ul>
      </div>
    </article>
  </div>
</template>

<script>
  export default {
    data() {
        return {
          headTit: {
          },
        }
      },
      computed: {},

      methods: {

      },
      components: {

      },
  }
</script>

<style lang="sass" scoped>
  article {
      margin-top: 10px;
      padding-left: 24px;
      height: 1100px;
      overflow-y: scroll;
      .group_layer1 {
          width: 502px;
          height: 210px;
          img {
            width: 100%;
            height: 100%;
          }
      }
      .group_product {
          width: 502px;
          h3{
              font-size:28px;
              color:#333;
              border-left:solid 2px #84b83a;
              padding-left:10px;
              margin:20px 0;
              clear:both;
            }
        .productList {
            padding:0 44px;
            margin-left:-46px;
            height:auto;
            clear:both;
            li {
              float:left;
              margin-left:46px;
              text-align:center;
              margin-bottom:50px;
              .product_pic {
                width: 100px;
                height: 100px;
              }
              p{
                padding-top:16px;
                font-size:22px;
              }
            }
          }
        }
      }

</style>
