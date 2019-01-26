<template>
  <div>
    <div class="box">
      <ul>
        <li>
          <svg data-v-617269a8 viewBox="0 0 40 40" id="msite" width="100%" height="100%">
            <g data-v-617269a8 fill="none" fill-rule="evenodd" stroke="#666" stroke-width="2">
              <path
                data-v-617269a8
                d="M31.426 23.095l2.678 5.742 2.943-1.372a3.173 3.173 0 0 0 1.537-4.212l-1.339-2.871-5.819 2.713z"
              ></path>
              <path
                data-v-617269a8
                d="M29.074 31.161c-1.224-.49-2.404-.32-3.49.185-6.383 2.977-13.938.286-16.875-6.01-2.936-6.297-.14-13.815 6.243-16.792 5.211-2.43 11.203-1.083 14.825 2.919l-12.263 5.718c-1.596.745-2.295 2.624-1.561 4.198.734 1.574 2.625 2.246 4.22 1.503l8.422-3.928 9.953-4.641a18.78 18.78 0 0 0-.941-2.453C33.202 2.416 21.869-1.62 12.294 2.844 2.718 7.309-1.474 18.586 2.93 28.03c4.404 9.445 15.737 13.482 25.313 9.017 1.069-.499 2.067-.879 3.438-1.744 0 0-1.382-3.651-2.607-4.142z"
              ></path>
            </g>
          </svg>
          <span>外卖</span>
        </li>
        <li>
          <svg
            data-v-617269a8
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 40 40"
            id="find"
            width="100%"
            height="100%"
          >
            <g data-v-617269a8 fill="none" fill-rule="evenodd">
              <g
                data-v-617269a8
                stroke="#666"
                stroke-width="4"
                mask="url(#discover-regular.8ef537f_b)"
              >
                <path
                  data-v-617269a8
                  id="discover-regular.8ef537f_a"
                  d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
                ></path>
              </g>
              <path
                data-v-617269a8
                stroke="#666"
                stroke-width="2"
                d="M12.79 28.126c-1.515.68-2.169.016-1.462-1.484l3.905-8.284c.47-.999 1.665-2.198 2.66-2.675l8.484-4.064c1.497-.717 2.153-.08 1.46 1.435l-3.953 8.64c-.46 1.006-1.647 2.186-2.655 2.64l-8.44 3.792z"
              ></path>
              <path
                data-v-617269a8
                fill="#666"
                d="M15.693 24.636c-.692.276-1.02-.06-.747-.746l2.21-4.946c.225-.505.721-.602 1.122-.202l2.563 2.563c.394.394.31.893-.203 1.122l-4.945 2.209z"
              ></path>
            </g>
          </svg>
          <span>搜索</span>
        </li>
        <li>
          <svg
            data-v-617269a8
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 38 38"
            id="order"
            width="100%"
            height="100%"
          >
            <g data-v-617269a8 fill="none" fill-rule="evenodd">
              <g
                data-v-617269a8
                stroke="#666"
                stroke-width="4"
                mask="url(#order-regular.41c17f8_b)"
              >
                <rect data-v-617269a8 id="order-regular.41c17f8_a" width="38" height="38" rx="2"></rect>
              </g>
              <rect data-v-617269a8 width="24" height="2" x="7" y="8" fill="#666" rx="1"></rect>
              <rect data-v-617269a8 width="20" height="2" x="7" y="17" fill="#666" rx="1"></rect>
              <rect data-v-617269a8 width="8" height="2" x="7" y="26" fill="#666" rx="1"></rect>
            </g>
          </svg>
          <span>订单</span>
        </li>
        <li>
          <svg
            data-v-617269a8
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 38 38"
            id="profile"
            width="100%"
            height="100%"
          >
            <g data-v-617269a8 fill="none" fill-rule="evenodd" stroke="#666" stroke-width="4">
              <g data-v-617269a8 mask="url(#profile-regular.c151d62_c)">
                <path
                  data-v-617269a8
                  id="profile-regular.c151d62_a"
                  d="M10 11.833V8.999A8.999 8.999 0 0 1 19 0c4.97 0 9 4.04 9 8.999v2.834l-.013.191C27.657 16.981 23.367 21 19 21c-4.616 0-8.64-4.02-8.987-8.976L10 11.833z"
                ></path>
              </g>
              <g data-v-617269a8 mask="url(#profile-regular.c151d62_d)">
                <path
                  data-v-617269a8
                  id="profile-regular.c151d62_b"
                  d="M0 32.675C0 26.763 10.139 22 19.027 22 27.916 22 38 26.763 38 32.757v3.312C38 37.136 37.098 38 35.997 38H2.003C.897 38 0 37.137 0 36.037v-3.362z"
                ></path>
              </g>
            </g>
          </svg>
          <span>我的</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.box {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 999;
      background-color: #fff;
  height: 45px;
}
.box ul {
  /* position:fixed;
    bottom: 0; */
    display: flex;
    text-align: center;
    justify-content: space-between;
    align-content: center;
}
.box ul li {
    width: 25%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
}
.box ul li svg{
    width: 18px;
    height: 18px;
    margin-top: .3rem;
    fill: #ccc;
}
.box ul li span{
    margin-top: 3px;
    font-size: 12px;
    color: #666;
}
</style>
