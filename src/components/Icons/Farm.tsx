import React from 'react'

interface Props {
  size: number
  fillColor: string
}
const Farm: React.FC<Props> = props => {
  const { size, fillColor } = props
  return (
    <svg width={size} height={size} viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M45.0001 33.4863C44.7845 33.9937 44.3802 34.3066 43.9208 34.5808C39.1028 37.5035 34.2903 40.4332 29.4833 43.3699C28.5829 43.9268 27.5431 44.2169 26.4845 44.2066C20.2438 44.198 14.004 44.198 7.76494 44.2066H7.25635V28.1566C8.85713 28.0394 10.4204 28.1308 11.8642 28.9629C12.1688 29.1377 12.4609 29.3335 12.7384 29.5488C14.3228 30.7863 16.1239 31.3605 18.129 31.3488C19.4321 31.3418 20.7364 31.3359 22.0396 31.3488C23.3614 31.3652 24.3259 31.9933 24.9364 33.1523C25.2552 33.7594 25.2294 34.3898 24.9564 35.0168C24.8485 35.264 24.6915 35.3543 24.4161 35.3519C23.0099 35.3379 21.6036 35.3601 20.1974 35.3426C18.2933 35.3064 16.4312 35.9041 14.904 37.0418C14.4681 37.3594 14.345 37.8351 14.6099 38.2137C14.8747 38.5922 15.347 38.6824 15.8087 38.3625C16.7345 37.7215 17.7095 37.2035 18.8392 37.05C19.2456 36.9965 19.655 36.9698 20.0649 36.9703C22.1884 36.9633 24.3118 36.9551 26.4353 36.9703C27.2845 36.9706 28.1277 36.8272 28.929 36.5461C33.5438 34.9937 38.1614 33.4492 42.7817 31.9125C43.9466 31.5234 44.4153 31.7074 45.0001 32.775V33.4863Z"
        fill={fillColor}
      />
      <path
        d="M28.037 0C28.5433 0.133594 29.0659 0.226172 29.5546 0.407813C30.9758 0.93219 32.1658 1.94205 32.9144 3.25893C33.663 4.57581 33.922 6.11493 33.6456 7.60429C33.3688 9.08556 32.58 10.4223 31.4172 11.3808C30.2544 12.3392 28.7916 12.8583 27.2847 12.8473C25.7704 12.8424 24.3068 12.3011 23.1538 11.3193C22.0008 10.3376 21.2331 8.97895 20.987 7.48476C20.8474 6.65272 20.873 5.80132 21.0625 4.97919C21.2519 4.15706 21.6015 3.38031 22.0912 2.6933C22.5809 2.0063 23.2012 1.4225 23.9165 0.975254C24.6319 0.52801 25.4284 0.226082 26.2605 0.0867184C26.3572 0.0640676 26.4523 0.0350994 26.5452 0H28.037ZM28.1191 8.23124C28.0019 8.34843 27.8378 8.64609 27.5847 8.76679C27.1745 8.96249 26.8429 8.73984 26.5745 8.3871C26.454 8.21805 26.2713 8.10373 26.0665 8.06924C25.8617 8.03475 25.6517 8.0829 25.4824 8.20312C25.1109 8.46562 24.9995 8.94257 25.3054 9.31991C25.5656 9.64101 25.9288 9.87773 26.2324 10.166C26.3639 10.2758 26.4659 10.4168 26.5288 10.5762C26.6378 10.9582 26.9214 11.2312 27.2964 11.243C27.6714 11.2547 28.0394 11.0086 28.0898 10.623C28.1261 10.343 28.2656 10.2398 28.4824 10.1238C28.9167 9.88849 29.2673 9.52408 29.4856 9.08094C29.7039 8.63779 29.7792 8.13778 29.7011 7.64999C29.628 7.18525 29.4188 6.75261 29.0999 6.40677C28.7809 6.06093 28.3666 5.81742 27.9093 5.70703C27.6843 5.65312 27.4406 5.65195 27.2167 5.61445C27.1113 5.5999 27.0099 5.5644 26.9185 5.51004C26.8271 5.45568 26.7474 5.38356 26.6843 5.29793C26.6212 5.2123 26.5758 5.1149 26.5509 5.01147C26.526 4.90804 26.5221 4.80067 26.5394 4.6957C26.5516 4.58992 26.5862 4.48796 26.6409 4.39662C26.6956 4.30527 26.7692 4.22665 26.8567 4.16598C26.9442 4.10532 27.0436 4.06401 27.1483 4.04482C27.2531 4.02563 27.3607 4.02899 27.464 4.05468C27.6984 4.12148 27.8988 4.32421 28.0699 4.50703C28.3886 4.84804 28.814 4.94297 29.1691 4.70625C29.2609 4.65121 29.34 4.57729 29.4011 4.48939C29.4623 4.40148 29.504 4.30159 29.5236 4.19634C29.5432 4.09108 29.5402 3.98286 29.5149 3.87884C29.4895 3.77483 29.4424 3.67738 29.3765 3.59297C29.1103 3.26867 28.8035 2.97997 28.4636 2.73398C28.2913 2.60039 28.1273 2.53945 28.0956 2.26523C28.0476 1.85742 27.7441 1.63476 27.3316 1.61133C26.9449 1.59023 26.6484 1.88203 26.5253 2.28515C26.4596 2.46112 26.3355 2.60922 26.1738 2.70469C25.7537 2.93399 25.4112 3.28306 25.19 3.7075C24.9688 4.13194 24.8789 4.61257 24.9316 5.08828C24.9779 5.5732 25.1735 6.0318 25.4915 6.40081C25.8095 6.76982 26.2342 7.03104 26.707 7.14843C26.9216 7.18999 27.1383 7.21973 27.3562 7.23749C27.8249 7.29843 28.1249 7.61718 28.1249 8.23124H28.1191Z"
        fill={fillColor}
      />
      <path
        d="M0 27.0703C0.242578 26.6426 0.604687 26.5054 1.09453 26.5172C2.27812 26.5465 3.46406 26.5242 4.64883 26.5277C5.35195 26.5277 5.62383 26.8066 5.62383 27.5191C5.62383 33.0058 5.62656 38.4926 5.63203 43.9793C5.64298 44.1817 5.59913 44.3834 5.50508 44.563C5.41104 44.7427 5.27029 44.8936 5.09766 45H0V27.0703Z"
        fill={fillColor}
      />
      <path
        d="M43.1941 17.9649C42.4406 18.5777 41.6589 19.1238 40.9898 19.7824C40.2621 20.4984 39.6597 21.3399 38.9648 22.091C37.1144 24.0832 34.8128 24.4817 32.291 23.809C30.975 23.4574 30.0468 22.5984 29.8043 21.1922C29.5371 19.6395 29.9929 18.3223 31.2539 17.3367C32.2675 16.5445 33.4605 16.1977 34.7191 16.1063C37.6488 15.8965 40.425 16.4508 43.0171 17.857C43.0816 17.8922 43.1414 17.9297 43.1941 17.9649Z"
        fill={fillColor}
      />
      <path
        d="M11.3918 17.9895C13.086 17.0187 14.9599 16.4027 16.8997 16.1789C18.4911 16.0008 20.0883 15.9446 21.6411 16.4426C23.1188 16.9114 24.3036 17.7434 24.7606 19.3172C25.4122 21.5801 24.1747 23.5547 21.7676 23.9731C19.336 24.3926 17.1832 23.8547 15.4969 21.9141C14.6555 20.9391 13.7872 19.9887 12.8801 19.0805C12.4641 18.6645 11.925 18.3739 11.3918 17.9895Z"
        fill={fillColor}
      />
      <path
        d="M20.8066 29.693C21.1271 29.27 21.5411 28.9269 22.0162 28.6904C22.4913 28.454 23.0146 28.3307 23.5453 28.3301C24.3802 28.3114 25.198 28.0893 25.9277 27.6832C26.3487 27.4397 26.8262 27.3109 27.3125 27.3096C27.7989 27.3084 28.277 27.4348 28.6992 27.6762C29.4451 28.0824 30.2761 28.3072 31.125 28.3324C31.7364 28.3371 32.3367 28.4961 32.8704 28.7945C33.404 29.093 33.8537 29.5213 34.1777 30.0398C34.6049 30.7106 35.2431 31.2202 35.9918 31.4883C36.3656 31.6254 36.7066 31.8516 37.1801 32.0988L33.9844 33.1641C31.9476 33.8426 29.9144 34.5317 27.8719 35.1903C27.4805 35.3168 27.0516 35.3274 26.5594 35.4035C27.0844 33.5918 26.55 32.1738 25.2902 30.9949C24.0305 29.816 22.4637 29.6168 20.8066 29.693Z"
        fill={fillColor}
      />
      <path d="M26.5559 14.448H28.0899V25.7261H26.5559V14.448Z" fill={fillColor} />
    </svg>
  )
}

export default Farm