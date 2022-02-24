import React from 'react'
import { useTheme } from 'styled-components'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme()
  const primaryColor = theme.isDark ? '#3C3742' : '#e9eaeb'
  const secondaryColor = theme.isDark ? '#666171' : '#bdc2c4'

  return (
    <Svg viewBox="0 0 32 32" fill="none" {...props}>
      <circle cx="16" cy="16" r="16" fill="#15181E" />
      <path
        d="M12.7802 14.1673C12.8674 14.255 12.9883 14.3051 13.1116 14.3051C13.2349 14.3051 13.3558 14.255 13.443 14.1673C13.5301 14.0802 13.5803 13.9592 13.5803 13.8359C13.5803 13.7127 13.5302 13.5922 13.443 13.5045C13.3558 13.4173 13.2349 13.3672 13.1116 13.3672C12.9883 13.3672 12.8674 13.4173 12.7802 13.5045C12.693 13.5917 12.6428 13.7127 12.6428 13.8359C12.6428 13.9597 12.693 14.0802 12.7802 14.1673Z"
        fill="#777E89"
      />
      <path
        d="M18.8884 13.3672C18.7646 13.3672 18.6442 13.4173 18.557 13.5045C18.4698 13.5922 18.4197 13.7127 18.4197 13.8359C18.4197 13.9597 18.4698 14.0802 18.557 14.1673C18.6442 14.255 18.7651 14.3051 18.8884 14.3051C19.0117 14.3051 19.1326 14.255 19.2198 14.1673C19.307 14.0802 19.3572 13.9592 19.3572 13.8359C19.3572 13.7127 19.307 13.5922 19.2198 13.5045C19.1326 13.4173 19.0117 13.3672 18.8884 13.3672Z"
        fill="#777E89"
      />
      <path
        d="M24.2967 11.3128C24.4103 11.0247 24.473 10.7104 24.473 10.3811C24.473 9.34972 23.8511 8.46134 22.9628 8.06989C23.1267 7.99152 23.2884 7.92959 23.4453 7.89645C23.6363 7.85605 23.7823 7.70145 23.8117 7.50842C23.8411 7.31534 23.7478 7.12433 23.5774 7.02889C22.8608 6.62755 22.0694 6.37363 21.2566 6.27669C21.3304 6.19278 21.3733 6.08342 21.3733 5.96722C21.3733 5.78197 21.2642 5.61411 21.0949 5.53883C20.2902 5.18127 19.433 5 18.5469 5C17.6584 5 16.8028 5.18089 16.0001 5.53808C15.1973 5.18089 14.3417 5 13.4533 5C12.5672 5 11.7099 5.18127 10.9053 5.53883C10.736 5.61406 10.6269 5.78197 10.6269 5.96722C10.6269 6.08342 10.6698 6.19278 10.7436 6.27669C9.93075 6.37363 9.13931 6.62755 8.42278 7.02889C8.25239 7.12433 8.15902 7.31534 8.18845 7.50842C8.21784 7.70145 8.36386 7.85605 8.55487 7.89645C8.71177 7.92964 8.87353 7.99152 9.03731 8.06989C8.14908 8.46134 7.52714 9.34972 7.52714 10.3811C7.52714 10.7104 7.58981 11.0246 7.70348 11.3128C5.95369 12.86 4.95703 15.0603 4.95703 17.4086C4.95703 18.0414 5.03034 18.6729 5.17495 19.2855C5.21948 19.4742 5.37572 19.6161 5.56795 19.6422C5.76014 19.6681 5.94862 19.5734 6.042 19.4035C6.1567 19.1946 6.27788 18.9892 6.40523 18.7875C6.38737 19.0079 6.37847 19.2298 6.37847 19.4526C6.37847 23.1023 8.83313 26.3288 12.3477 27.299C12.5306 27.3495 12.726 27.2847 12.8425 27.1348C12.959 26.9851 12.9737 26.7798 12.8797 26.6149C12.7358 26.3626 12.6016 26.1056 12.4773 25.8444C12.991 26.3765 13.5521 26.8644 14.1577 27.305C14.7233 27.7165 15.2135 28.2189 15.6148 28.7981C15.7023 28.9245 15.8463 29 16.0001 29C16.1539 29 16.2979 28.9245 16.3855 28.7981C16.7867 28.2189 17.277 27.7165 17.8425 27.305C18.4482 26.8644 19.0093 26.3765 19.523 25.8444C19.3986 26.1057 19.2644 26.3626 19.1205 26.615C19.0266 26.7799 19.0413 26.9851 19.1578 27.1349C19.2742 27.2847 19.4696 27.3494 19.6525 27.299C20.8802 26.9601 22.0285 26.3244 22.9732 25.4607C23.1643 25.286 23.1775 24.9895 23.0029 24.7984C22.8282 24.6074 22.5317 24.5941 22.3406 24.7688C21.7895 25.2727 21.16 25.6889 20.4841 25.9999C20.8545 25.1767 21.1357 24.3166 21.3235 23.4305C21.371 23.2067 21.25 22.9813 21.0373 22.8973C20.8246 22.8133 20.5822 22.8949 20.4638 23.0907C19.6423 24.4501 18.5748 25.613 17.2911 26.5469C16.8115 26.8958 16.3791 27.3014 16.0002 27.757C15.6213 27.3014 15.1889 26.8958 14.7093 26.5469C13.4257 25.613 12.3582 24.4501 11.5366 23.0907C11.4183 22.895 11.176 22.8133 10.9632 22.8973C10.7505 22.9813 10.6294 23.2067 10.6769 23.4305C10.8648 24.317 11.1463 25.1777 11.517 26.0012C8.99634 24.844 7.31616 22.2932 7.31616 19.4527C7.31616 18.6067 7.46156 17.7781 7.74825 16.9901C7.82484 16.7796 7.74173 16.5443 7.55002 16.4285C7.35825 16.3129 7.11141 16.3489 6.96075 16.5148C6.58059 16.9335 6.22856 17.377 5.90761 17.841C5.89903 17.6972 5.89477 17.5529 5.89477 17.4086C5.89477 15.3813 6.73444 13.4784 8.21362 12.1154C8.55352 12.4757 8.9992 12.7355 9.50419 12.8461C9.48614 13.025 9.477 13.2057 9.477 13.3876C9.477 15.3877 10.5974 17.204 12.359 18.109C12.3576 18.1423 12.3568 18.1758 12.3568 18.2094C12.3568 18.9562 12.7081 19.6221 13.2536 20.0519L13.1896 20.2144C12.9464 20.8318 13.0241 21.5278 13.3976 22.0765C13.7711 22.6251 14.3903 22.9525 15.0539 22.9525H16.9468C17.6104 22.9525 18.2296 22.625 18.6031 22.0765C18.9766 21.5279 19.0543 20.8318 18.8111 20.2144L18.7471 20.0519C19.2926 19.6221 19.6439 18.9562 19.6439 18.2094C19.6439 18.1758 19.6431 18.1423 19.6417 18.109C21.4034 17.204 22.5237 15.3878 22.5237 13.3876C22.5237 13.2057 22.5146 13.025 22.4965 12.8461C23.0015 12.7356 23.4472 12.4757 23.7871 12.1154C25.2662 13.4784 26.106 15.3813 26.106 17.4086C26.106 17.5529 26.1016 17.6971 26.0931 17.841C25.7722 17.377 25.4202 16.9336 25.04 16.5148C24.8894 16.3489 24.6425 16.3128 24.4507 16.4285C24.2589 16.5443 24.1759 16.7796 24.2525 16.9901C24.5392 17.7781 24.6846 18.6065 24.6846 19.4527C24.6846 20.1266 24.5917 20.7934 24.4085 21.4346C24.3374 21.6835 24.4816 21.943 24.7305 22.014C24.7735 22.0264 24.8168 22.0322 24.8595 22.0322C25.0635 22.0322 25.2511 21.898 25.3099 21.692C25.517 20.967 25.622 20.2136 25.622 19.4527C25.622 19.2298 25.6131 19.008 25.5952 18.7875C25.7227 18.9893 25.8438 19.1947 25.9585 19.4035C26.0519 19.5735 26.2402 19.6685 26.4325 19.6423C26.6248 19.6161 26.781 19.4743 26.8255 19.2856C26.9701 18.673 27.0435 18.0415 27.0435 17.4087C27.0431 15.0603 26.0465 12.86 24.2967 11.3128ZM12.3309 7.23523C12.5405 7.26838 12.7458 7.15695 12.8322 6.96345C12.9187 6.76995 12.8645 6.54256 12.7002 6.40873C12.5544 6.29005 12.4038 6.1782 12.249 6.07344C12.6409 5.98306 13.0433 5.9375 13.4533 5.9375C14.2743 5.9375 15.0619 6.11886 15.7944 6.47652C15.9242 6.53989 16.0759 6.53989 16.2057 6.47652C16.9382 6.11886 17.7258 5.9375 18.5469 5.9375C18.9568 5.9375 19.3593 5.98306 19.7512 6.07339C19.5963 6.17816 19.4458 6.29 19.3 6.40869C19.1356 6.54247 19.0815 6.76991 19.168 6.96341C19.2544 7.15686 19.4598 7.26814 19.6693 7.23519C20.5088 7.10216 21.3683 7.17233 22.1678 7.4315C22.0085 7.52328 21.8546 7.61919 21.7071 7.71116C21.5876 7.78559 21.4683 7.85989 21.3572 7.92547C20.7458 8.07097 20.2114 8.44016 19.8562 8.96816C19.7328 8.90928 19.6067 8.85439 19.4769 8.80564C18.3515 8.38334 17.0956 8.41522 16.0001 8.88805C14.9042 8.41522 13.6484 8.38339 12.5232 8.80569C12.3934 8.85439 12.2673 8.90928 12.144 8.96816C11.7887 8.44002 11.2542 8.07087 10.6425 7.92552L9.83227 7.4315C10.6317 7.17238 11.4914 7.10225 12.3309 7.23523ZM9.68086 11.9252C8.97858 11.759 8.46464 11.1315 8.46464 10.3811C8.46464 9.50586 9.17663 8.79387 10.0518 8.79387C10.572 8.79387 11.0461 9.04264 11.3415 9.45603C10.7107 9.93416 10.2133 10.5685 9.89569 11.3177C9.81136 11.5166 9.73983 11.7193 9.68086 11.9252ZM13.294 18.2093C13.294 17.7089 13.5582 17.26 13.9644 17.0097C14.0355 17.1602 14.1405 17.2969 14.2775 17.4087L15.2801 18.2268C15.3581 18.2904 15.4426 18.3421 15.5313 18.382V19.3462C15.2915 19.5219 15.0031 19.6172 14.7018 19.6172C13.9256 19.6171 13.294 18.9856 13.294 18.2093ZM17.0027 16.3253C17.1262 16.3253 17.1744 16.409 17.1922 16.459C17.194 16.4641 17.1958 16.47 17.1974 16.476C17.1979 16.478 17.1985 16.48 17.199 16.4819C17.2121 16.5347 17.2125 16.6149 17.1299 16.6822L16.1272 17.5005C16.0536 17.5606 15.9466 17.5606 15.8729 17.5004L14.8702 16.6823C14.7746 16.6042 14.7902 16.5088 14.808 16.4589C14.8258 16.409 14.874 16.3253 14.9974 16.3253H17.0027V16.3253ZM17.8279 21.5487C17.6261 21.845 17.3049 22.0149 16.9465 22.0149H15.0537C14.6953 22.0149 14.374 21.845 14.1723 21.5487C13.9706 21.2525 13.9303 20.8913 14.0617 20.5578L14.0945 20.4744C14.2883 20.5265 14.4919 20.5546 14.7019 20.5546C15.1693 20.5546 15.6181 20.4175 16.0001 20.1626C16.3822 20.4175 16.8311 20.5546 17.2983 20.5546C17.5084 20.5546 17.7119 20.5265 17.9057 20.4744L17.9386 20.5579C18.0699 20.8913 18.0296 21.2525 17.8279 21.5487ZM17.2983 19.6171C16.9971 19.6171 16.7086 19.5218 16.4688 19.3461V18.382C16.5575 18.3421 16.642 18.2904 16.7199 18.2268L17.7226 17.4086C17.8596 17.2968 17.9647 17.1601 18.0357 17.0097C18.4419 17.2599 18.7061 17.7089 18.7061 18.2093C18.7061 18.9856 18.0746 19.6171 17.2983 19.6171ZM19.4013 17.1727C19.1215 16.6065 18.6191 16.1639 17.9966 15.9703C17.8764 15.7528 17.6921 15.5855 17.4715 15.4871V13.6719C17.4715 12.8905 18.1072 12.2549 18.8885 12.2549C19.1474 12.2549 19.3573 12.045 19.3573 11.7861C19.3573 11.5273 19.1474 11.3174 18.8885 11.3174C17.5903 11.3174 16.534 12.3736 16.534 13.6719V15.3878H15.4662V13.6719C15.4662 12.3736 14.4099 11.3174 13.1117 11.3174C12.8528 11.3174 12.6429 11.5273 12.6429 11.7861C12.6429 12.045 12.8528 12.2549 13.1117 12.2549C13.893 12.2549 14.5287 12.8906 14.5287 13.6719V15.4871C14.3081 15.5855 14.1238 15.7528 14.0036 15.9703C13.3811 16.1639 12.8787 16.6065 12.5989 17.1727C11.2574 16.3982 10.4143 14.962 10.4143 13.3875C10.4143 12.7962 10.5302 12.2229 10.7589 11.6835C11.1537 10.7522 11.8972 10.0419 12.8526 9.68333C13.816 9.32169 14.8537 9.36875 15.7741 9.81533L15.7938 9.82489C15.9232 9.88836 16.0744 9.88869 16.2041 9.82597L16.2255 9.81561C17.1465 9.3687 18.1841 9.32169 19.1475 9.68323C20.1029 10.0418 20.8465 10.7522 21.2414 11.6834C21.47 12.2229 21.5859 12.7962 21.5859 13.3875C21.5859 14.962 20.7428 16.3982 19.4013 17.1727ZM22.3193 11.9252C22.2603 11.7193 22.1888 11.5166 22.1045 11.3177C21.7868 10.5685 21.2894 9.93416 20.6586 9.45603C20.954 9.04264 21.4282 8.79387 21.9483 8.79387C22.8235 8.79387 23.5355 9.50586 23.5355 10.3811C23.5355 11.1315 23.0216 11.759 22.3193 11.9252Z"
        fill="#777E89"
      />
      <path
        d="M24.0044 23.9604C23.8811 23.9604 23.7602 23.9103 23.673 23.8231C23.5853 23.7359 23.5356 23.615 23.5356 23.4917C23.5356 23.3684 23.5853 23.2474 23.673 23.1603C23.7598 23.0731 23.8807 23.0229 24.0044 23.0229C24.1277 23.0229 24.2486 23.0731 24.3358 23.1603C24.4229 23.2474 24.4727 23.3684 24.4727 23.4917C24.4727 23.615 24.4229 23.7359 24.3358 23.8231C24.2481 23.9103 24.1272 23.9604 24.0044 23.9604Z"
        fill="#777E89"
      />
    </Svg>
  )
}

export default Icon
