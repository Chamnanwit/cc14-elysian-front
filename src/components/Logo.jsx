import { Link } from "react-router-dom";
import { motion, useTime, useTransform } from "framer-motion";

export default function Logo() {
  // const time = useTime();

  // const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });
  return (
    <Link to="/">
      <div className="relative w-fit h-fit">
        <svg
          //   width="276"
          //   height="71"
          className="w-[130px] relative"
          viewBox="0 0 276 71"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.927979 0.597397V47.3174H32.672V39.7014H9.88798V26.7094H31.392V19.3494H9.88798V8.2134H32.672V0.597397H0.927979ZM41.8715 0.597397V47.3174H75.3435V39.4454H51.0235V0.597397H41.8715ZM85.423 30.2934V47.3174H94.767V30.2934L111.855 0.597397H101.743L90.159 22.4214H90.031L78.383 0.597397H68.335L85.423 30.2934ZM171.226 0.597397V47.3174H180.57V0.597397H171.226ZM203.061 0.597397L186.933 47.3174H196.789L200.131 36.6294H218.071L221.429 47.3174H231.285L215.157 0.597397H203.061ZM215.617 28.8214L209.141 8.2134H209.013L202.571 28.8214H215.617ZM237.163 0.597397V47.3174H246.123V15.5094H246.251L265.707 47.3174H275.115V0.597397H266.155V32.4054H266.027L246.507 0.597397H237.163ZM3.01134 57.681V69.3174H5.47157V64.5106H10.2045V62.4822H5.47157V59.7094H10.7159V57.681H3.01134ZM17.4293 60.5901V69.3174H19.8497V60.5901H17.4293ZM17.719 59.1072C17.9766 59.3458 18.2853 59.4651 18.6452 59.4651C19.005 59.4651 19.3118 59.3458 19.5656 59.1072C19.8232 58.8647 19.952 58.575 19.952 58.2379C19.952 57.9045 19.8232 57.6185 19.5656 57.3799C19.3118 57.1375 19.005 57.0163 18.6452 57.0163C18.2853 57.0163 17.9766 57.1375 17.719 57.3799C17.4652 57.6185 17.3384 57.9045 17.3384 58.2379C17.3384 58.575 17.4652 58.8647 17.719 59.1072ZM29.3131 69.3174V64.2719C29.3169 63.8969 29.387 63.5769 29.5233 63.3117C29.6635 63.0428 29.8567 62.8382 30.1029 62.6981C30.3529 62.5579 30.6407 62.4879 30.9665 62.4879C31.4514 62.4879 31.832 62.6394 32.1085 62.9424C32.3851 63.2416 32.5214 63.6583 32.5176 64.1924V69.3174H34.9381V63.7606C34.9381 63.0826 34.8131 62.4992 34.5631 62.0106C34.3131 61.5182 33.9627 61.1394 33.512 60.8742C33.0612 60.6091 32.5328 60.4765 31.9267 60.4765C31.279 60.4765 30.7279 60.6261 30.2733 60.9254C29.8188 61.2208 29.4949 61.6223 29.3017 62.1299H29.1995V60.5901H26.8926V69.3174H29.3131ZM43.3645 68.9481C43.9024 69.289 44.5028 69.4594 45.1657 69.4594C45.6354 69.4594 46.0331 69.3818 46.3589 69.2265C46.6884 69.0712 46.9554 68.8761 47.16 68.6413C47.3683 68.4026 47.5293 68.1621 47.6429 67.9197H47.7452V69.3174H50.1316V57.681H47.7168V62.056H47.6429C47.5369 61.8212 47.3816 61.5826 47.177 61.3401C46.9763 61.0939 46.7111 60.8894 46.3816 60.7265C46.0558 60.5598 45.6486 60.4765 45.16 60.4765C44.5198 60.4765 43.9308 60.6432 43.3929 60.9765C42.8589 61.306 42.4308 61.8041 42.1089 62.4708C41.7869 63.1337 41.6259 63.9651 41.6259 64.9651C41.6259 65.9386 41.7812 66.7606 42.0918 67.431C42.4062 68.0977 42.8304 68.6034 43.3645 68.9481ZM46.9214 67.2151C46.6524 67.4272 46.3229 67.5333 45.9327 67.5333C45.535 67.5333 45.1998 67.4254 44.927 67.2094C44.6581 66.9897 44.4517 66.6867 44.3077 66.3004C44.1676 65.9102 44.0975 65.4613 44.0975 64.9538C44.0975 64.45 44.1676 64.0068 44.3077 63.6242C44.4479 63.2416 44.6543 62.9424 44.927 62.7265C45.1998 62.5106 45.535 62.4026 45.9327 62.4026C46.3229 62.4026 46.6543 62.5068 46.927 62.7151C47.1998 62.9235 47.4081 63.2189 47.552 63.6015C47.696 63.9841 47.7679 64.4348 47.7679 64.9538C47.7679 65.4727 47.6941 65.9254 47.5464 66.3117C47.4024 66.6981 47.1941 66.9992 46.9214 67.2151ZM67.5214 69.056C68.1047 69.3439 68.7979 69.4879 69.6009 69.4879C70.1199 69.4879 70.6445 69.4102 71.1748 69.2549C71.6908 69.1049 72.159 68.8647 72.5796 68.5343L73.2828 69.3174H75.8055L74.0542 67.3082C74.1151 67.2274 74.1742 67.1434 74.2316 67.056C74.5081 66.6318 74.7241 66.1356 74.8794 65.5674C75.0347 64.9954 75.1123 64.3534 75.1123 63.6413H73.1066C73.1066 64.2208 73.0081 64.7492 72.8112 65.2265C72.7503 65.374 72.683 65.5155 72.6095 65.6507L70.6917 63.4505L71.3737 62.9594C71.8623 62.6072 72.2411 62.2094 72.51 61.7663C72.7828 61.3193 72.9191 60.8212 72.9191 60.2719C72.9191 59.7757 72.796 59.3212 72.5498 58.9083C72.3074 58.4916 71.9589 58.1583 71.5044 57.9083C71.0536 57.6545 70.5176 57.5276 69.8964 57.5276C69.26 57.5276 68.7032 57.6602 68.2259 57.9254C67.7487 58.1867 67.3775 58.5428 67.1123 58.9935C66.8509 59.4443 66.7203 59.9519 66.7203 60.5163C66.7203 61.0163 66.8206 61.4803 67.0214 61.9083C67.2222 62.3326 67.4722 62.7341 67.7714 63.1129C67.7912 63.1373 67.8109 63.1617 67.8307 63.1861C67.419 63.4705 67.0565 63.7567 66.743 64.0447C66.4172 64.3401 66.1634 64.664 65.9816 65.0163C65.7998 65.3685 65.7089 65.7719 65.7089 66.2265C65.7089 66.8363 65.8642 67.3894 66.1748 67.8856C66.4892 68.378 66.9381 68.7682 67.5214 69.056ZM69.0657 64.6214L68.9987 64.6697C68.6767 64.9045 68.4381 65.1451 68.2828 65.3913C68.1312 65.6337 68.0555 65.8666 68.0555 66.0901C68.0555 66.3666 68.1237 66.6147 68.26 66.8344C68.3964 67.0541 68.5896 67.2284 68.8396 67.3572C69.0896 67.4822 69.3831 67.5447 69.7203 67.5447C70.1294 67.5447 70.5328 67.4519 70.9305 67.2663C71.0481 67.2108 71.1624 67.1487 71.2735 67.0799L69.0657 64.6214ZM69.5273 62.0692L70.135 61.6697C70.4267 61.4841 70.6407 61.289 70.7771 61.0844C70.9134 60.8761 70.9816 60.6507 70.9816 60.4083C70.9816 60.1772 70.8888 59.9632 70.7032 59.7663C70.5176 59.5693 70.2544 59.4727 69.9134 59.4765C69.6862 59.4765 69.4892 59.5276 69.3225 59.6299C69.1559 59.7284 69.0252 59.8591 68.9305 60.0219C68.8396 60.181 68.7941 60.3591 68.7941 60.556C68.7941 60.7985 68.8623 61.0447 68.9987 61.2947C69.1316 61.5385 69.3078 61.7966 69.5273 62.0692ZM90.7706 57.681V69.3174H93.2308V64.5106H97.9638V62.4822H93.2308V59.7094H98.4751V57.681H90.7706ZM105.189 60.5901V69.3174H107.609V60.5901H105.189ZM105.478 59.1072C105.736 59.3458 106.045 59.4651 106.404 59.4651C106.764 59.4651 107.071 59.3458 107.325 59.1072C107.582 58.8647 107.711 58.575 107.711 58.2379C107.711 57.9045 107.582 57.6185 107.325 57.3799C107.071 57.1375 106.764 57.0163 106.404 57.0163C106.045 57.0163 105.736 57.1375 105.478 57.3799C105.224 57.6185 105.098 57.9045 105.098 58.2379C105.098 58.575 105.224 58.8647 105.478 59.1072ZM119.294 62.4083V60.5901H117.652V58.4992H115.231V60.5901H114.038V62.4083H115.231V66.9538C115.228 67.5257 115.347 67.9992 115.589 68.3742C115.832 68.7492 116.171 69.0257 116.606 69.2038C117.046 69.3818 117.557 69.4594 118.141 69.4367C118.455 69.4254 118.722 69.3932 118.942 69.3401C119.161 69.2909 119.332 69.2473 119.453 69.2094L119.072 67.4083C119.012 67.4197 118.925 67.4367 118.811 67.4594C118.697 67.4784 118.584 67.4879 118.47 67.4879C118.307 67.4879 118.163 67.4632 118.038 67.414C117.917 67.3647 117.822 67.2795 117.754 67.1583C117.686 67.0333 117.652 66.8591 117.652 66.6356V62.4083H119.294ZM136.901 57.681H134.145L138.39 65.2038V69.3174H140.833V65.2038L145.077 57.681H142.322L139.668 62.6924H139.554L136.901 57.681ZM151.305 68.9254C151.949 69.3004 152.712 69.4879 153.595 69.4879C154.477 69.4879 155.239 69.3004 155.879 68.9254C156.523 68.5466 157.019 68.0201 157.367 67.3458C157.716 66.6678 157.89 65.8818 157.89 64.9879C157.89 64.0863 157.716 63.2985 157.367 62.6242C157.019 61.9462 156.523 61.4197 155.879 61.0447C155.239 60.6659 154.477 60.4765 153.595 60.4765C152.712 60.4765 151.949 60.6659 151.305 61.0447C150.665 61.4197 150.17 61.9462 149.822 62.6242C149.473 63.2985 149.299 64.0863 149.299 64.9879C149.299 65.8818 149.473 66.6678 149.822 67.3458C150.17 68.0201 150.665 68.5466 151.305 68.9254ZM154.612 67.2719C154.343 67.4992 154.007 67.6129 153.606 67.6129C153.201 67.6129 152.86 67.4992 152.583 67.2719C152.31 67.0409 152.104 66.7265 151.964 66.3288C151.828 65.931 151.759 65.4784 151.759 64.9708C151.759 64.4632 151.828 64.0106 151.964 63.6129C152.104 63.2151 152.31 62.9007 152.583 62.6697C152.86 62.4386 153.201 62.3231 153.606 62.3231C154.007 62.3231 154.343 62.4386 154.612 62.6697C154.881 62.9007 155.083 63.2151 155.22 63.6129C155.36 64.0106 155.43 64.4632 155.43 64.9708C155.43 65.4784 155.36 65.931 155.22 66.3288C155.083 66.7265 154.881 67.0409 154.612 67.2719ZM170.164 60.5901V65.6015C170.168 65.9916 170.091 66.3193 169.932 66.5844C169.776 66.8496 169.572 67.0504 169.318 67.1867C169.064 67.3193 168.791 67.3856 168.5 67.3856C168.041 67.3856 167.676 67.236 167.403 66.9367C167.13 66.6375 166.992 66.2303 166.988 65.7151V60.5901H164.568V66.1469C164.572 66.8288 164.697 67.414 164.943 67.9026C165.193 68.3913 165.539 68.7682 165.983 69.0333C166.426 69.2985 166.939 69.431 167.522 69.431C168.178 69.431 168.733 69.2757 169.187 68.9651C169.646 68.6545 169.973 68.2435 170.17 67.7322H170.261V69.3174H172.585V60.5901H170.164ZM179.625 60.5901V69.3174H182.045V64.3799C182.045 64.0238 182.125 63.7094 182.284 63.4367C182.447 63.164 182.667 62.9519 182.943 62.8004C183.223 62.6451 183.542 62.5674 183.898 62.5674C184.064 62.5674 184.248 62.5807 184.449 62.6072C184.65 62.6337 184.807 62.664 184.92 62.6981V60.5504C184.814 60.5238 184.691 60.503 184.551 60.4879C184.411 60.4727 184.28 60.4651 184.159 60.4651C183.67 60.4651 183.239 60.6053 182.864 60.8856C182.489 61.1621 182.222 61.5712 182.063 62.1129H181.972V60.5901H179.625ZM200.128 57.681V69.3174H202.589V65.1924H204.385L206.589 69.3174H209.305L206.836 64.7968C206.871 64.7814 206.906 64.7655 206.941 64.7492C207.574 64.4538 208.056 64.0295 208.39 63.4765C208.723 62.9197 208.89 62.2549 208.89 61.4822C208.89 60.7132 208.725 60.0447 208.396 59.4765C208.07 58.9045 207.594 58.4632 206.969 58.1526C206.348 57.8382 205.598 57.681 204.719 57.681H200.128ZM202.589 63.2151H204.259C204.729 63.2151 205.119 63.1507 205.43 63.0219C205.74 62.8932 205.971 62.7 206.123 62.4424C206.278 62.1848 206.356 61.8647 206.356 61.4822C206.356 61.0958 206.278 60.7701 206.123 60.5049C205.971 60.2397 205.738 60.039 205.424 59.9026C205.113 59.7625 204.721 59.6924 204.248 59.6924H202.589V63.2151ZM217.205 68.9424C217.853 69.306 218.626 69.4879 219.524 69.4879C220.243 69.4879 220.878 69.378 221.427 69.1583C221.98 68.9348 222.431 68.6242 222.779 68.2265C223.132 67.825 223.365 67.3553 223.478 66.8174L221.24 66.6697C221.156 66.8894 221.035 67.075 220.876 67.2265C220.717 67.378 220.526 67.4916 220.302 67.5674C220.079 67.6432 219.832 67.681 219.563 67.681C219.158 67.681 218.808 67.5958 218.512 67.4254C218.217 67.2549 217.988 67.0125 217.825 66.6981C217.666 66.3837 217.586 66.0106 217.586 65.5788V65.5731H223.529V64.9083C223.529 64.1659 223.425 63.5182 223.217 62.9651C223.009 62.4083 222.717 61.9462 222.342 61.5788C221.971 61.2113 221.535 60.9367 221.035 60.7549C220.539 60.5693 220.003 60.4765 219.427 60.4765C218.571 60.4765 217.825 60.6659 217.188 61.0447C216.556 61.4235 216.065 61.9519 215.717 62.6299C215.368 63.3079 215.194 64.0958 215.194 64.9935C215.194 65.914 215.368 66.7113 215.717 67.3856C216.065 68.056 216.562 68.575 217.205 68.9424ZM217.588 64.0731C217.603 63.7597 217.684 63.4737 217.83 63.2151C217.99 62.931 218.209 62.7057 218.49 62.539C218.774 62.3685 219.099 62.2833 219.467 62.2833C219.819 62.2833 220.128 62.361 220.393 62.5163C220.662 62.6678 220.872 62.878 221.024 63.1469C221.175 63.4159 221.251 63.7246 221.251 64.0731H217.588ZM232.633 69.3174V64.2719C232.637 63.8969 232.707 63.5769 232.844 63.3117C232.984 63.0428 233.177 62.8382 233.423 62.6981C233.673 62.5579 233.961 62.4879 234.287 62.4879C234.772 62.4879 235.152 62.6394 235.429 62.9424C235.705 63.2416 235.842 63.6583 235.838 64.1924V69.3174H238.258V63.7606C238.258 63.0826 238.133 62.4992 237.883 62.0106C237.633 61.5182 237.283 61.1394 236.832 60.8742C236.381 60.6091 235.853 60.4765 235.247 60.4765C234.599 60.4765 234.048 60.6261 233.594 60.9254C233.139 61.2208 232.815 61.6223 232.622 62.1299H232.52V60.5901H230.213V69.3174H232.633ZM249.912 62.4083V60.5901H248.27V58.4992H245.85V60.5901H244.656V62.4083H245.85V66.9538C245.846 67.5257 245.965 67.9992 246.208 68.3742C246.45 68.7492 246.789 69.0257 247.225 69.2038C247.664 69.3818 248.175 69.4594 248.759 69.4367C249.073 69.4254 249.34 69.3932 249.56 69.3401C249.779 69.2909 249.95 69.2473 250.071 69.2094L249.69 67.4083C249.63 67.4197 249.543 67.4367 249.429 67.4594C249.315 67.4784 249.202 67.4879 249.088 67.4879C248.925 67.4879 248.781 67.4632 248.656 67.414C248.535 67.3647 248.44 67.2795 248.372 67.1583C248.304 67.0333 248.27 66.8591 248.27 66.6356V62.4083H249.912ZM257.593 69.1924C258.028 69.3856 258.525 69.4822 259.081 69.4822C259.513 69.4822 259.894 69.4254 260.223 69.3117C260.553 69.1943 260.835 69.0333 261.07 68.8288C261.305 68.6204 261.492 68.3799 261.633 68.1072H261.701V69.3174H263.996V63.431C263.996 62.9121 263.896 62.467 263.695 62.0958C263.494 61.7208 263.22 61.414 262.871 61.1754C262.526 60.9367 262.131 60.7606 261.684 60.6469C261.24 60.5333 260.776 60.4765 260.292 60.4765C259.595 60.4765 258.981 60.5826 258.451 60.7947C257.924 61.003 257.494 61.3022 257.161 61.6924C256.828 62.0788 256.604 62.5371 256.49 63.0674L258.729 63.2492C258.812 62.9613 258.983 62.7227 259.24 62.5333C259.498 62.3401 259.845 62.2435 260.28 62.2435C260.693 62.2435 261.011 62.342 261.235 62.539C261.462 62.736 261.576 63.0144 261.576 63.3742V63.4083C261.576 63.5939 261.506 63.7341 261.365 63.8288C261.225 63.9235 261 63.9954 260.689 64.0447C260.379 64.0901 259.97 64.1394 259.462 64.1924C259.03 64.2341 258.617 64.306 258.223 64.4083C257.833 64.5106 257.485 64.6621 257.178 64.8629C256.871 65.0636 256.629 65.3288 256.451 65.6583C256.273 65.9879 256.184 66.3951 256.184 66.8799C256.184 67.4557 256.309 67.9367 256.559 68.3231C256.812 68.7057 257.157 68.9954 257.593 69.1924ZM260.718 67.6015C260.445 67.7416 260.131 67.8117 259.775 67.8117C259.403 67.8117 259.097 67.7265 258.854 67.556C258.615 67.3818 258.496 67.1299 258.496 66.8004C258.496 66.5731 258.555 66.3837 258.672 66.2322C258.79 66.0769 258.955 65.9538 259.167 65.8629C259.379 65.7719 259.627 65.7057 259.911 65.664C260.044 65.6451 260.191 65.6242 260.354 65.6015C260.517 65.575 260.68 65.5466 260.843 65.5163C261.006 65.4822 261.151 65.4462 261.28 65.4083C261.413 65.3666 261.517 65.3212 261.593 65.2719V66.1981C261.593 66.5049 261.515 66.7795 261.36 67.0219C261.205 67.2644 260.99 67.4576 260.718 67.6015ZM273.398 69.3174V57.681H270.978V69.3174H273.398Z"
            fill="url(#paint0_linear_237_1415)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_237_1415"
              x1="156.263"
              y1="42.5396"
              x2="119.377"
              y2="8.41556"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#127C8B" />
              <stop offset="1" stop-color="#386649" />
            </linearGradient>
          </defs>
        </svg>
        <motion.svg
          width="25"
          height="25"
          viewBox="0 0 51 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-[1.5px] bottom-0 right-0 left-[52px]"
          animate={{
            scale: [0, 0, 1, 1],
            rotate: [0, 180, 180, 360],
            // opacity: [0, 0, 1, 1, 1],
            // borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 3,
            // ease: "easeInOut",
            // times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.13847 30.1863C-0.29821 22.6231 1.74752 14.5004 7.37671 8.41556C15.9527 -0.854694 29.8905 -2.20021 40.0055 4.7363L43.1931 1.29062L46.0853 10.6178C46.1214 10.6669 46.1572 10.7161 46.1929 10.7653L46.1396 10.793L46.9605 13.4405L34.5547 10.6282L37.8795 7.03432C29.0432 1.24129 17.0603 2.50176 9.64666 10.5156C4.5662 16.0073 2.81429 23.3919 4.29432 30.1863H1.13847ZM44.2631 42.5396C50.7497 35.5279 52.478 25.8104 49.6028 17.3611L46.8227 18.8077C49.1345 26.1107 47.5672 34.4145 41.9932 40.4397C34.5795 48.4536 22.5966 49.714 13.7603 43.921L17.0851 40.327L4.67933 37.5148L5.5395 40.2888L5.52458 40.2965C5.53457 40.3102 5.54458 40.3238 5.5546 40.3375L8.44678 49.6646L11.6344 46.2189C21.7494 53.1554 35.6871 51.8098 44.2631 42.5396Z"
            fill="url(#paint0_linear_304_1299)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_304_1299"
              x1="44.2631"
              y1="42.5396"
              x2="7.37675"
              y2="8.41555"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#127C8B" />
              <stop offset="1" stop-color="#386649" />
            </linearGradient>
          </defs>
        </motion.svg>
        {/* <svg
          width="25"
          height="25"
          viewBox="0 0 51 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-[1.5px] bottom-0 right-0 left-[52px]"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.37671 8.41557C1.74752 14.5004 -0.29821 22.6231 1.13847 30.1863H1.87732V30.1863H11.5983V29.9244C12.3573 29.7476 12.7533 29.4307 13.3191 28.8649C15.1226 27.0614 16.5833 27.2809 19.3497 29.7715C20.6712 30.9611 22.5919 32.6699 23.6182 33.5678C25.2421 34.9902 25.4386 35.4036 25.1398 36.7655C24.75 38.5399 25.5384 38.8965 26.488 37.3759C26.8159 36.851 27.4672 36.5215 27.9349 36.6438C28.403 36.766 29.086 36.5051 29.4524 36.0636C29.8192 35.6215 30.5232 35.2603 31.0169 35.2603C31.5106 35.2603 32.1993 34.9175 32.5472 34.4985C32.8951 34.0795 33.3628 33.8502 33.5868 33.9884C34.2745 34.4136 35.6216 33.6604 35.6216 32.8515C35.6216 32.431 33.504 29.5203 30.9161 26.383C28.3283 23.2457 26.1421 20.5842 26.0582 20.468C25.9743 20.3524 24.7796 20.8702 23.4039 21.6192C20.5372 23.1797 18.46 23.3439 16.7491 22.1457C15.7759 21.4637 15.6076 20.993 15.8358 19.5875L16.1152 17.8648H10.4877H5.13812C5.51525 16.839 5.97163 15.8348 6.50762 14.8615C8.50346 11.5465 13.0628 7.31969 16.3075 5.83435C21.7861 3.32633 29.0712 3.25675 34.6562 5.65937C35.9652 6.22237 36.956 6.79104 37.6004 7.33608L34.5547 10.6282L46.9605 13.4405L46.1396 10.793L46.1929 10.7653C46.1572 10.7161 46.1213 10.6669 46.0853 10.6178L43.1931 1.29062L40.0054 4.7363C29.8904 -2.20021 15.9527 -0.854694 7.37671 8.41557ZM49.6028 17.3611C52.4781 25.8104 50.7497 35.5279 44.2631 42.5396C40.3579 46.7608 35.3411 49.3389 30.0797 50.2401C28.7638 50.4826 27.4243 50.6092 26.0741 50.6092C25.8676 50.6092 25.6598 50.6062 25.4508 50.6C21.2567 50.5398 17.0672 49.4353 13.3048 47.2701C12.7139 46.9537 12.1414 46.6182 11.592 46.2647L8.44678 49.6646L5.5546 40.3375L5.52458 40.2965L5.5395 40.2888L4.67933 37.5148L17.0851 40.327L13.7603 43.921C22.5966 49.714 34.5795 48.4536 41.9932 40.4397C43.0075 39.3432 43.8892 38.1713 44.639 36.9436C45.4927 35.5251 46.1785 34.0037 46.6606 32.4018L47.364 30.0652L41.952 30.1992L36.5405 30.3338L31.6769 24.4833C29.0021 21.2651 26.6251 18.5612 26.3943 18.4742C26.1636 18.3872 24.6343 19.014 22.9956 19.8663C21.0621 20.8727 19.6122 21.3117 18.8652 21.1163C16.6396 20.534 17.5237 19.3706 23.0319 15.6326C25.6484 13.8572 26.8942 13.9258 32.3359 16.1458C33.7196 16.7102 34.7525 17.1079 35.7182 17.3955H49.459V17.4359L49.6028 17.3611ZM14.6693 30.3737C13.3457 31.7822 13.5565 33.1585 15.1589 33.5781C15.7202 33.7249 16.1796 34.0482 16.1796 34.2969C16.1796 34.545 16.5321 34.7487 16.9629 34.7487C17.3942 34.7487 17.8798 35.095 18.042 35.5187C18.2047 35.9418 19.1491 36.6734 20.1412 37.1441C21.8562 37.9581 21.9784 37.953 22.6436 37.0438C23.5942 35.7438 23.5226 35.2117 22.3545 34.9063C21.8111 34.764 21.2427 34.325 21.0918 33.9306C20.9404 33.5366 20.464 33.2138 20.0327 33.2138C19.6019 33.2138 19.2494 32.9631 19.2494 32.6561C19.2494 32.0723 16.6554 29.1207 16.1428 29.1207C15.9796 29.1207 15.3165 29.6845 14.6693 30.3737Z"
            fill="url(#paint0_linear_306_1300)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_306_1300"
              x1="44.2631"
              y1="42.5396"
              x2="7.37675"
              y2="8.41555"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#127C8B" />
              <stop offset="1" stop-color="#386649" />
            </linearGradient>
          </defs>
        </svg> */}
        <svg
          width="25"
          height="25"
          viewBox="0 0 51 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[5px] bottom-0 right-0 left-[52px]"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M49.5037 5.22576C50.33 6.22136 50.6347 12.3825 50.1085 16.0035L47.1982 16.6162L47.364 16.0652L41.952 16.1992L36.5405 16.3338L31.6769 10.4833C29.0021 7.26512 26.6251 4.56115 26.3943 4.47417C26.1636 4.38719 24.6343 5.01394 22.9956 5.86632C21.0621 6.8727 19.6122 7.31168 18.8652 7.11623C16.6396 6.534 17.5237 5.37055 23.0319 1.63257C25.6484 -0.14279 26.8942 -0.0742319 32.3359 2.14574C33.7196 2.71014 34.7525 3.10791 35.7182 3.39545H49.459V5.17714C49.4751 5.19309 49.49 5.20929 49.5037 5.22576ZM5.33052 2.99999H2.40508C2.06437 3.84834 1.77493 4.71264 1.54185 5.58799C0.671059 8.85834 0.614268 14.6996 1.44465 15.53C1.52408 15.6094 1.66949 15.6818 1.87732 15.7468V16.1863H11.5983V15.9244C12.3573 15.7476 12.7533 15.4307 13.3191 14.8649C15.1226 13.0614 16.5833 13.2809 19.3497 15.7715C20.6712 16.961 22.5919 18.6699 23.6182 19.5678C25.2421 20.9901 25.4386 21.4035 25.1398 22.7655C24.75 24.5398 25.5384 24.8964 26.488 23.3759C26.8159 22.8509 27.4672 22.5214 27.9349 22.6437C28.403 22.766 29.086 22.5051 29.4524 22.0635C29.8192 21.6215 30.5232 21.2603 31.0169 21.2603C31.5107 21.2603 32.1993 20.9175 32.5472 20.4985C32.8951 20.0794 33.3628 19.8502 33.5868 19.9884C34.2745 20.4135 35.6216 19.6604 35.6216 18.8515C35.6216 18.431 33.504 15.5203 30.9161 12.383C28.3283 9.24564 26.1421 6.58414 26.0582 6.468C25.9743 6.35237 24.7796 6.87014 23.4039 7.61917C20.5372 9.17964 18.46 9.34388 16.7491 8.14563C15.7759 7.46363 15.6076 6.99293 15.8358 5.58748L16.1152 3.86482H10.4877H4.85978L5.33052 2.99999ZM14.6693 16.3737C13.3457 17.7822 13.5565 19.1585 15.1589 19.578C15.7202 19.7249 16.1796 20.0482 16.1796 20.2969C16.1796 20.545 16.5321 20.7486 16.9629 20.7486C17.3942 20.7486 17.8798 21.095 18.042 21.5186C18.2047 21.9418 19.1491 22.6734 20.1412 23.1441C21.8562 23.9581 21.9784 23.953 22.6436 23.0438C23.5942 21.7438 23.5226 21.2117 22.3545 20.9062C21.8111 20.764 21.2427 20.325 21.0918 19.9305C20.9404 19.5366 20.464 19.2137 20.0327 19.2137C19.6019 19.2137 19.2494 18.9631 19.2494 18.6561C19.2494 18.0723 16.6554 15.1207 16.1428 15.1207C15.9796 15.1207 15.3165 15.6845 14.6693 16.3737Z"
            fill="url(#paint0_linear_237_1415)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_237_1415"
              x1="28.9058"
              y1="14.789"
              x2="18.9311"
              y2="9.90893"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#127C8B" />
              <stop offset="1" stop-color="#386649" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </Link>
  );
}
