import React from 'react'
import Svg from '../../../components/Svg/Svg'
import { SvgProps } from '../../../components/Svg/types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M23.9889 15.0583L23.7069 12.6955C23.6766 12.4416 23.4482 12.2588 23.1938 12.2848C22.2615 12.3802 21.4125 11.7005 21.3015 10.7699C21.1904 9.83936 21.8555 8.97906 22.7841 8.85222C23.0375 8.81758 23.2164 8.5862 23.1861 8.33223L22.9041 5.9695C22.8553 5.56131 22.6506 5.19653 22.3275 4.94233C22.0044 4.68817 21.6017 4.57506 21.1935 4.62372L4.72903 6.58895C4.32497 6.63719 3.96361 6.83852 3.70978 7.15595H1.539C0.690375 7.15605 0 7.84642 0 8.695V11.0745C0 11.3303 0.205078 11.5389 0.460781 11.5432C1.39786 11.5591 2.16023 12.3345 2.16023 13.2717C2.16023 14.2089 1.39786 14.9843 0.460781 15.0002C0.205078 15.0045 0 15.2131 0 15.4688V17.8483C0 18.6969 0.690375 19.3873 1.539 19.3873H14.7452H18.1204C18.969 19.3873 19.6594 18.6969 19.6594 17.8483V17.125L22.6432 16.7688C23.0514 16.7201 23.4162 16.5153 23.6704 16.1922C23.9245 15.8691 24.0376 15.4664 23.9889 15.0583ZM18.7219 16.2927V17.2368V17.8483C18.7219 18.1799 18.4521 18.4498 18.1204 18.4498H15.2139V17.6556V17.5709C15.2139 17.312 15.0041 17.1022 14.7452 17.1022C14.4863 17.1022 14.2764 17.312 14.2764 17.5709V17.7675V18.4497H8.56041H5.09133H1.539C1.20736 18.4497 0.9375 18.1799 0.9375 17.8482V15.89C1.46414 15.7892 1.94784 15.5316 2.33152 15.142C2.82562 14.6402 3.09773 13.9759 3.09773 13.2716C3.09773 12.5673 2.82562 11.9031 2.33152 11.4013C1.9478 11.0117 1.46414 10.7541 0.9375 10.6533V8.695C0.9375 8.36336 1.20731 8.0935 1.539 8.0935H3.37275H4.311H14.2765V13.8015C14.2765 14.0604 14.4863 14.2703 14.7452 14.2703C15.0041 14.2703 15.214 14.0604 15.214 13.8015V8.09355H18.1204C18.4521 8.09355 18.7219 8.36336 18.7219 8.69505V10.6533C18.1953 10.7542 17.7116 11.0117 17.3279 11.4014C16.8337 11.9032 16.5617 12.5674 16.5617 13.2717C16.5617 13.976 16.8338 14.6402 17.3279 15.142C17.7116 15.5317 18.1953 15.7892 18.7219 15.89V16.2927H18.7219ZM22.9335 15.6126C22.8342 15.7389 22.6916 15.8189 22.5321 15.838L19.6594 16.1808V15.4688C19.6594 15.213 19.4543 15.0045 19.1986 15.0001C18.2615 14.9842 17.4991 14.2088 17.4991 13.2716C17.4991 12.3344 18.2615 11.559 19.1986 11.5431C19.4543 11.5388 19.6594 11.3302 19.6594 11.0744V8.69491C19.6594 7.84628 18.969 7.15591 18.1204 7.15591H14.7452H7.88888L21.3046 5.55466C21.4641 5.53558 21.6216 5.57983 21.7478 5.67916C21.8741 5.77848 21.9541 5.92108 21.9732 6.08059L22.2053 8.02511C21.6943 8.18767 21.2445 8.5007 20.9097 8.93308C20.4786 9.48991 20.2871 10.1817 20.3706 10.881C20.4541 11.5803 20.803 12.2077 21.3531 12.6474C21.7802 12.9888 22.291 13.1872 22.8259 13.2249L23.058 15.1694C23.0771 15.3289 23.0329 15.4863 22.9335 15.6126Z" />
      <path d="M15.1783 15.5068C15.1665 15.4786 15.152 15.4514 15.1351 15.4261C15.1183 15.4003 15.0986 15.3764 15.077 15.3549C15.0554 15.3333 15.0311 15.3136 15.0058 15.2968C14.98 15.2794 14.9528 15.2653 14.9247 15.2536C14.8965 15.2419 14.867 15.2325 14.837 15.2264C14.7765 15.2147 14.7142 15.2147 14.6537 15.2264C14.6237 15.2325 14.5947 15.2419 14.5661 15.2536C14.5379 15.2653 14.5108 15.2794 14.4854 15.2968C14.4597 15.3136 14.4358 15.3333 14.4142 15.3549C14.3922 15.3764 14.3729 15.4003 14.3556 15.4261C14.3387 15.4514 14.3242 15.4786 14.3125 15.5068C14.3008 15.5353 14.2919 15.5649 14.2858 15.5949C14.2797 15.6249 14.2769 15.6558 14.2769 15.6863C14.2769 15.7168 14.2797 15.7477 14.2858 15.7777C14.2919 15.8077 14.3008 15.8372 14.3125 15.8653C14.3242 15.8939 14.3387 15.9211 14.3556 15.9464C14.3729 15.9722 14.3922 15.9961 14.4142 16.0177C14.4358 16.0393 14.4597 16.0589 14.4854 16.0758C14.5108 16.0927 14.5379 16.1072 14.5661 16.1189C14.5947 16.1307 14.6237 16.14 14.6537 16.1457C14.6842 16.1518 14.7147 16.155 14.7456 16.155C14.7761 16.155 14.8065 16.1518 14.837 16.1457C14.867 16.14 14.8965 16.1307 14.9247 16.1189C14.9528 16.1072 14.98 16.0927 15.0058 16.0758C15.0311 16.0589 15.0554 16.0393 15.077 16.0177C15.0986 15.9961 15.1183 15.9722 15.1351 15.9464C15.152 15.9211 15.1665 15.8939 15.1783 15.8653C15.19 15.8372 15.1989 15.8077 15.205 15.7777C15.2111 15.7477 15.2144 15.7168 15.2144 15.6863C15.2144 15.6558 15.2111 15.6249 15.205 15.5949C15.1989 15.5649 15.19 15.5353 15.1783 15.5068Z" />
      <path d="M11.3372 12.0594L9.2781 11.7602L8.35724 9.89434C8.27825 9.73435 8.11532 9.63306 7.93691 9.63306C7.7585 9.63306 7.59552 9.73435 7.51658 9.89434L6.70635 11.536L6.59572 11.7602L5.81628 11.8734L4.53664 12.0594C4.36007 12.085 4.21339 12.2087 4.15822 12.3784C4.10305 12.5481 4.14908 12.7344 4.27686 12.8589L5.51689 14.0677L5.76678 14.3113L5.62503 15.1379L5.41503 16.3621C5.38485 16.5379 5.45713 16.7157 5.6015 16.8206C5.74583 16.9254 5.93722 16.9393 6.09514 16.8563L7.93691 15.888L9.77863 16.8563C9.84721 16.8924 9.92211 16.9101 9.99669 16.9101C10.0939 16.9101 10.1906 16.8799 10.2723 16.8206C10.4166 16.7157 10.4889 16.538 10.4587 16.3621L10.107 14.3113L11.597 12.8589C11.7248 12.7344 11.7708 12.5481 11.7156 12.3784C11.6605 12.2087 11.5138 12.0851 11.3372 12.0594ZM9.27618 13.812C9.16569 13.9197 9.11525 14.0748 9.14136 14.2269L9.37419 15.5844L8.15502 14.9435C8.01847 14.8717 7.85535 14.8717 7.71875 14.9435L6.49958 15.5845L6.73241 14.2269C6.74441 14.1571 6.73953 14.0868 6.72083 14.0206C6.6988 13.9426 6.65736 13.8703 6.5976 13.8121L6.02 13.249L5.6113 12.8507L6.08249 12.7821L6.97438 12.6525C6.98844 12.6504 7.00213 12.6472 7.01582 12.6439C7.15063 12.6117 7.26533 12.5217 7.32735 12.3961L7.93696 11.1609L8.54652 12.3961C8.61482 12.5344 8.74677 12.6303 8.89944 12.6525L10.2625 12.8506L9.27618 13.812Z" />
    </Svg>
  )
}

export default Icon
