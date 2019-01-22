<template>
  <div>
    <myheader>
      <p slot="myheader">会员中心</p>
    </myheader>
    <div class="myvipcard">
      <p>
        为账户
        <b>{{userinfo.username}}</b>购买会员
      </p>
      <div class="vipcard">
        <div class="vip_prerogative">
          <div class="vip_header">
            <p>会员特权</p>
            <p>
              <span>会员说明</span>
              <svg
                fill="#ccc"
                viewBox="0 0 1024 1024"
                id="arrow-right"
                class="icon"
                width="12"
                height="12"
              >
                <path
                  d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z"
                  class="selected"
                ></path>
              </svg>
            </p>
          </div>
        </div>
        <div class="vip_detail">
          <img
            data-v-4e602cfc
            src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABQCAMAAACTf/MwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACHUExURUxpcVGm/1Kn/1Kn/1Gm/1Gm/6f//1Gm/1ao/1Wq/1Gm/1Gm/1Gm/1Kn/1qx/1Gm/1Gm/2C2/1Gm/1Gm/2O2/1Om/1Sq/1Wq/1Sp/1Gm/1Ko/1er/1Gn/1Gm/1Gn/1Kn/1Kn/1Kn/1Kn/1Kn/1Gn/1Gm/1Gm/1Sp/1Gm/1Gm/1Kn/1Gm/1Gm/0Kn+j4AAAAsdFJOUwCKSJH+1gH4JSD1+6C3Du2ZBKflCSsaKC7BNhSwb8pmeEJWT7zGgzzR2l7fYL3NXQAAA75JREFUeNrFlmtzgjoQQMNDwaC8Kw9B8Vltz///fbfFXOoItUFn7j0fjCNwzO6GZMV/QroPiyQ4zj/85x3+rpIovMVm9Yxj9bFwuGKroaiX4xzLzcGjZd2UflrWhXc1rZuZrmNWFzYA9rHuHlptFkp8brK/HW6zVsk4bO5C8D8qFebklD9y5KczLY5KaD/psaTl0ying47SuNAiq0flTffzgJbE2kZ3F9+tT1qCeJeKP4jMUJmC0LyZk7lWv873qdAi2lqJytPuX1EDQBKqOWoyLY1rBOHVUwOB9T4V4ylPCWC1K0JC7IsnSS2wv8tvQBGJ54mh+hoK2IrxuN2ih+RrCOCJkEppqWQqATjjLVkAhvo+gZmGxq/3vR0ggWQ2TtOAeyeeQPAmdDVmuyWEYH4N+0PeTeaM8y50NQ3O8keT4HQV9Yu90NWUHs5Kaa6DLEWHria9QHMTVFqohIzTWHCMbjTCP6vyjNHsbaQrbjWRBVxWozRbBzbiVpOfAThEIzRbCbG40USNA4QSLH3Nzrn5Wwsy9wjIjdjZsNPVmB4c/W6xGVboAMV3ek8g3zQ1MRzSn+2+sgFZT9s8F7DW1JRrI+1OyyMAhXvzVqZ6GkVUNuooX5uiIz802pWKsp2xCGhx4t7uqKPZh4dPjw4ZWz8Ym1RTM+Mh66meJrcBj1950wwqM9/dFILyrUe+hq2ORjGFiRhgDub/osEbwP5V4+ENa4bpay6txsEe1MjFAMmwZimEhOlLufmEVXsEpy9pElipzwFNYAwwGdBIiFSiX0mx3ZZ6DfkrGh+Cr6ECc0jz6Q4wcHMG5+uOvXklxVtYXPsOQ/TwCHK3Rzbwam4g/Br2UPU1Cb+R9Q/pumsB7zG0ty3Vgk4DcPvJ2RnzAcLav288HOyVOpU24mlMWKsccex1vNrM4XQ90Rx463W8mviyeziGuNfxanL6CaUEO+91vFos5U2HEcM56nW8OlS3K8CVYPU6Xg1qsG9u3wB11/Fqs/fu8hiD/SFGsnVUs9oRHcBuxll2Dkz8u/ofgTDVl0xPNlyWvaa8As7aK3h1ANYr0SOyVIenwy4A4nT4mgSOmcaiqwCvFr/gFoBn+I8lUSOBSfkgb7UEko9Hke0vgHeKxCNmFcD51zX4fgQocvEX5gWgGHwl8op2tkKDqA4ADr3gs9gG5MkXevgnCbAo+xIvXAl9lpbTirrQ8lZix64YxzL0AIrtd9XK6irJxHhmoQOQVNWFVtIvj35oCk/N5EmRkQAEliteY5qZZh6JP/gH4pi+7mLJkZ4AAAAASUVORK5CYII="
            height="42"
            width="37"
          >
          <div class="vip_detail_right">
            <h5>减免配送费</h5>
            <p>每月减免30单，每日可减免3单，每单最高减4元</p>
            <p>蜂鸟专送专享</p>
          </div>
        </div>
        <div class="vip_detail">
          <img
            data-v-4e602cfc
            src="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABQCAMAAACTf/MwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB+UExURUxpcVKn/1qw/1Or/1Gm/1Gm/1Gm/1Gm/1Or/1Gm/1Ws/3DU/1Gm/161/1Gn/1Gm/1Op/1Kn/1Gn/1Oo/1Gn/1Kn/1Gn/1Sq/1Gn/1Kn/1Gm/1Gn/1Gn/1Sp/1Gm/1Gm/1Gm/1Gm/1Kn/1Kn/1Gm/1Gn/1Gm/1Gn/1Kn/1Gm/xLw9zUAAAApdFJOUwBEDxz9w/T5ItYWA+0IbeUtTZo2tJPMJ9N+pHZVPa7bvOFcY4SNialmEIpfyAAAA5pJREFUeNq9l+mSojAYRdlRZEdRVFBc+7z/C45DUhZtFCJTNfdPbJXjt+UmbfwXRfvcTUI3P1nTGdap8ZDyjz/BFEZwXvoIOXJxY/s7hh0f5bPlrrCiInYdQSp3M13G7PGQ8vPBz9GX4Go9zljvSrUYz1JJ0vySDjHSaiMZy3Pwtuj7uyx6eyveM4rbgU5eM9TeKNuGdEpW9eLlw/raSsZ2HxkjWpi5JIW52SOZJfLdTDJGSfUqkXXaG1KViFGQ9VXIDHLxZwyEVyVPLdIlAVbdRHhwtyZvuis4f9t/A3dhTNcW7o/FBXPC0+vn0EPyWEKYkFLhrWQKEgD+hFhCuMnXc5hNw9gtJPa/Yqw5hKnxrxh7g18bo5is5aOS7G84bmaMYhYhAwpFh8YxAYMKNDE2JMYHJWBrYmZw+IQ5wEwTk8LmE2YDqSamgPKxVFXVr/uqih9LCYUmpgb3sfgQ/ap7KDZyrYkx4Sique6FKAp2BFMTk8FSlKE3ZCcR4hIyTcwemseSw9V4KhdbuoG9JuYEWxGU/2zu2hfZbOGkiTkLt18cwLXlKJWwkUGdNTGxNHvTAW9XB0G988DpOrSCWBOzg6t44fCUI56+wk4TU8FFFjvp+UOnC1SjGOWr0blpPa9tzpHyE4MYNXA1YQ2MWka1/HoYtanqMKgYR8EoI6aOpmpBPo7RkzLw6kZRMbZheGD0pG4/ddv+VtvZcyhtRUoxA9VEVHu2JKwv1ZpUS+vLg4UsdE+qUaoG25fsUQnpgG2P2r0FoehLNnCIjB4+awFewXngSBs9Ck3Ru51wx55CBhUav/QD+dtJmDOo+dsdOIP2JcyWAbWmMh6mzGFtTFbk43RX0DvE0zEmcpDOL4P5XWhbpB1aPqyVG6+mLA/SJ3Cr3Hg1deGZSgFOqtx4tWR7PW+6QxkpN14dLfs7debBVbnxaigGp+4PtGi6uPFqK/Nf6ngH5/T1yPiv/4pFR3B231H2Psytl/67QB7pQxaVAwelp9ESKLUnODgCZfAGvwK8WDOhELhH7z/zAFcjILsB/Pij0bqAf7NGrGHnAZtioG6xByTnxdCwHAD/MtyNWQOw+TiDtQvgpuNDdQBw326JtAFITloTEYcARyX59d0BvMrS9aKLB7AsfkG2DuDngaEve+UDHOtnOl0kzvZb87dzATI7Y2s6yH3KCTIToLZpDnQQpT3fpUYvnYmgWwsQriRkutZmlo6eOH8AyHKn4WUusgUAAAAASUVORK5CYII="
            height="42"
            width="37"
          >
          <div class="vip_detail_right">
            <h5>减免配送费</h5>
            <p>每月减免30单，每日可减免3单，每单最高减4元</p>
            <p>蜂鸟专送专享</p>
          </div>
        </div>
      </div>
      <div class="vipcard">
        <div class="vip_header">
          <p>开通会员</p>
        </div>
        <div class="vip_header vip_2">
          <p>1个月<span>￥20</span></p>
          <p>购买</p>
        </div>
      </div>
      <div class="vipcard">
        <div class="vip_header">
          <p>兑换会员</p>
          <p>
              <span>使用卡号卡密</span>
              <svg
                fill="#ccc"
                viewBox="0 0 1024 1024"
                id="arrow-right"
                class="icon"
                width="12"
                height="12"
              >
                <path
                  d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z"
                  class="selected"
                ></path>
              </svg>
            </p>
        </div>
      </div>
      <div class="vipcard">
        <div class="vip_header">
          <p>购买记录</p>
          <p>
              <span>开发票</span>
              <svg
                fill="#ccc"
                viewBox="0 0 1024 1024"
                id="arrow-right"
                class="icon"
                width="12"
                height="12"
              >
                <path
                  d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z"
                  class="selected"
                ></path>
              </svg>
            </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myheader from "./myheader";
export default {
  components: {
    myheader
  },
  computed: {
    userinfo() {
      return this.$store.state.login.userinfo;
    }
  },
  created() {
    this.$store.dispatch("login/loginuser");
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.myvipcard {
  padding-top: 44px;
  width: 100vw;
  height: 100vh;
  background: #f5f5f5;
}
.vipcard{
  margin-top:11px;
}
.vipcard > div {
  padding: 0 10px;
  border-bottom: 1px solid #f5f5f5;
  background: #fff;
}
.myvipcard > p {
  color: #333;
  padding: 10px;
  font-size: 14px;
}
.myvipcard > p b {
  padding: 0 2px;
  font-size: 14px;
  font-weight: bold;
}
.vip_prerogative {
  background: #fff;
}
.vip_header {
  height: 47px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #333;
}
.vip_header p:nth-child(2) {
  font-size: 13px;
  color: #999;
}
.vip_header p:nth-child(2) #arrow-right {
  margin-left: 4px;
}
.vip_detail {
  display: flex;
  align-items: center;
  height: 91px;
  padding: 0 10px;
}
.vip_detail:nth-child(1) {
  border-bottom: 1px solid #f5f5f5;
}
.vip_detail .vip_detail_right {
  margin-left: 20px;
}
.vip_detail .vip_detail_right h5 {
  font-size: 16px;
  color: #333;
}
.vip_detail .vip_detail_right p {
  font-size: 12px;
  line-height: 20px;
  color: #999;
}
.vip_2 p:nth-child(1) span{
  font-size:15px;
  color: #f60;
  font-weight:bold;
}
.vip_2 p:nth-child(2){
  display: block;
  width: 60px;
  height: 28px;
  color:#f60;
  border: 1px solid #f60;
  border-radius:6px;
  text-align:center;
  line-height:28px;
}
</style>
