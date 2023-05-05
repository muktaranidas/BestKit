import React from "react";
import "./AboutBottom.css";
import NumberCounter from "number-counter";

const AboutBottom = () => {
  return (
    <section className="widthClass">
      <hr className="hr-style mb-[62px]" />
      <div className=" container  grid grid-cols-1 gap-[117px] mx-auto sm:grid-cols-2 xl:grid-cols-4">
        {/*  */}
        <div className="counter-line ">
          <div className="flex gap-[30px]   ">
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_6573)">
                <path
                  d="M59.9297 4.47925C59.7998 2.09589 57.9042 0.200615 55.5209 0.0705373C50.7118 -0.192197 41.3011 0.0633891 32.3025 4.71773C27.7152 7.09054 22.8637 11.1135 18.9919 15.755C18.9442 15.8122 18.8978 15.8698 18.8505 15.9271L10.0637 16.6058C8.61741 16.7176 7.32917 17.4757 6.52925 18.6855L0.534639 27.7526C-0.0720411 28.6701 -0.168486 29.8185 0.276475 30.8243C0.721553 31.8302 1.63608 32.5312 2.723 32.6996L10.1258 33.8462C10.0997 33.9901 10.0735 34.1339 10.0494 34.2778C9.803 35.752 10.2914 37.2677 11.3562 38.3324L21.6678 48.6441C22.5505 49.5268 23.7434 50.0135 24.9657 50.0135C25.2174 50.0135 25.4705 49.9928 25.7225 49.9507C25.8664 49.9267 26.0101 49.9004 26.1541 49.8743L27.3006 57.2773C27.469 58.3642 28.17 59.2788 29.1757 59.7238C29.5942 59.9089 30.0371 60.0003 30.4779 60.0003C31.097 60.0002 31.7118 59.82 32.2476 59.4657L41.3146 53.471C42.5246 52.671 43.2825 51.3827 43.3941 49.9365L44.0728 41.1499C44.1301 41.1026 44.1878 41.0562 44.245 41.0085C48.8867 37.1367 52.9097 32.2851 55.2824 27.6977C59.937 18.6988 60.1921 9.28804 59.9297 4.47925ZM39.3757 50.5383L30.7026 56.2726L29.5851 49.058C33.2507 47.9802 36.8768 46.254 40.3314 43.9416L39.8892 49.6656C39.8617 50.0227 39.6744 50.3408 39.3757 50.5383ZM24.1537 46.1582L13.842 35.8465C13.5789 35.5833 13.4573 35.2135 13.5169 34.8574C13.8235 33.0243 14.2998 31.2792 14.8895 29.6353L30.3616 45.1073C28.3872 45.8146 26.6187 46.2364 25.1427 46.4832C24.786 46.5425 24.4167 46.4212 24.1537 46.1582ZM10.3346 20.111L16.0585 19.6689C13.7459 23.1234 12.0197 26.7496 10.9419 30.4152L3.72741 29.2978L9.46187 20.6245C9.65944 20.3257 9.97761 20.1385 10.3346 20.111ZM41.9933 38.3086C39.1535 40.6773 36.3969 42.3906 33.8561 43.6303L16.3692 26.1435C17.9932 22.8266 19.9752 20.0646 21.6916 18.007C25.2746 13.7115 29.7309 10.0059 33.9178 7.8403C42.1765 3.56847 50.8778 3.33843 55.3295 3.58077C55.9187 3.61288 56.3874 4.08151 56.4195 4.67085C56.6622 9.12257 56.4317 17.8237 52.1598 26.0825C49.9943 30.2694 46.2887 34.7256 41.9933 38.3086Z"
                  fill="#008AFF"
                />
                <path
                  d="M41.1004 27.6846C43.3506 27.6844 45.6018 26.8278 47.3149 25.1146C48.975 23.4546 49.8891 21.2475 49.8891 18.9C49.8891 16.5525 48.9749 14.3454 47.3149 12.6855C43.8881 9.25854 38.3123 9.25877 34.8858 12.6855C33.2257 14.3454 32.3115 16.5525 32.3115 18.9C32.3115 21.2475 33.2258 23.4546 34.8858 25.1146C36.5993 26.8281 38.8493 27.6849 41.1004 27.6846ZM37.3714 15.1712C38.3994 14.1432 39.7498 13.6292 41.1001 13.6292C42.4506 13.6292 43.8009 14.1432 44.8289 15.1712C45.8249 16.1672 46.3733 17.4914 46.3733 18.8999C46.3733 20.3084 45.8249 21.6327 44.8289 22.6287C42.773 24.6848 39.4274 24.6846 37.3713 22.6287C36.3754 21.6327 35.8268 20.3085 35.8268 18.9C35.8268 17.4915 36.3755 16.1672 37.3714 15.1712Z"
                  fill="#008AFF"
                />
                <path
                  d="M1.79291 49.4458C2.24279 49.4458 2.69268 49.2742 3.0358 48.9308L8.77482 43.1918C9.46131 42.5053 9.46131 41.3924 8.77482 40.7059C8.08846 40.0194 6.97541 40.0194 6.28893 40.7059L0.55002 46.4449C-0.136465 47.1314 -0.136465 48.2443 0.55002 48.9308C0.893144 49.2741 1.34303 49.4458 1.79291 49.4458Z"
                  fill="#008AFF"
                />
                <path
                  d="M14.0344 45.9655C13.3481 45.2791 12.235 45.2791 11.5485 45.9655L0.514863 56.9993C-0.171621 57.6858 -0.171621 58.7988 0.514863 59.4852C0.858106 59.8285 1.30787 60 1.75775 60C2.20764 60 2.65752 59.8285 3.00065 59.4851L14.0343 48.4514C14.7209 47.765 14.7209 46.652 14.0344 45.9655Z"
                  fill="#008AFF"
                />
                <path
                  d="M16.8086 51.2249L11.0696 56.964C10.3831 57.6505 10.3831 58.7634 11.0696 59.4499C11.4128 59.7931 11.8627 59.9648 12.3124 59.9648C12.7622 59.9648 13.2122 59.7932 13.5553 59.4499L19.2944 53.7108C19.9808 53.0244 19.9808 51.9114 19.2944 51.2249C18.608 50.5385 17.4949 50.5385 16.8086 51.2249Z"
                  fill="#008AFF"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_6573">
                  <rect width="60" height="60" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className="flex  flex-col justify-center">
              <NumberCounter
                className="increment text-3xl font-semibold leading-none mb-2"
                end={834}
                delay={5}
                preFix=""
                postFix=""
              ></NumberCounter>

              <p className="capitalize text-gray">Startups</p>
            </div>
          </div>
        </div>
        <div className="counter-line ">
          <div className="flex  rounded-lg">
            <div className="flex gap-[30px] justify-between  align-middle rounded-lg">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M58.2305 21.0938L52.9688 21.1289V1.75781C52.9688 0.787031 52.1817 0 51.2109 0H33.75C33.1369 0 32.5679 0.31957 32.2488 0.843164L28.5497 6.91406H1.75781C0.787031 6.91406 0 7.70109 0 8.67188V43.8281C0 44.7989 0.787031 45.5859 1.75781 45.5859H10.7812C10.7816 53.3205 10.7804 52.9677 10.7822 53.0271C10.845 56.8826 14.0009 60 17.8711 60H58.2422C59.213 60 60 59.213 60 58.2422V22.8516C60 21.8566 59.1775 21.0799 58.2305 21.0938ZM3.51562 42.0703V10.4297H29.5371C30.1502 10.4297 30.7192 10.1101 31.0383 9.58652L34.7374 3.51562H49.4531V21.1523L24.8438 21.3164V15.9375C24.8438 14.9667 24.0567 14.1797 23.0859 14.1797H17.8711C13.9618 14.1797 10.7812 17.3602 10.7812 21.2695V42.0703H3.51562ZM21.3281 17.6953V23.0848V23.087V45.8203C18.7645 45.9716 16.7534 45.3489 14.2969 46.7889V21.2695C14.2969 19.2987 15.9004 17.6953 17.8711 17.6953H21.3281ZM56.4844 56.4844H17.8711C15.9004 56.4844 14.2969 54.881 14.2969 52.9102C14.2969 50.9393 15.9004 49.3359 17.8711 49.3359H23.0859C24.0567 49.3359 24.8438 48.5489 24.8438 47.5781V24.832L56.4844 24.6211V56.4844Z"
                  fill="#008AFF"
                />
                <path
                  d="M30 49.3359H51.2109C52.948 49.3359 53.6287 47.072 52.1823 46.113L30.9714 32.0505C29.8096 31.2804 28.2422 32.1085 28.2422 33.5156V47.5781C28.2422 48.5489 29.0292 49.3359 30 49.3359ZM31.7578 36.79L45.3784 45.8203H31.7578V36.79Z"
                  fill="#008AFF"
                />
              </svg>

              <div className="flex flex-col justify-center align-middle">
                <NumberCounter
                  className="increment text-3xl font-semibold leading-none mb-2"
                  end={372}
                  delay={5}
                  preFix=""
                  postFix=""
                ></NumberCounter>

                <p className="capitalize text-gray">Projects</p>
              </div>
            </div>
          </div>
        </div>
        <div className="counter-line ">
          <div className="flex  rounded-lg">
            <div className="flex gap-[30px] justify-between  align-middle rounded-lg">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_6562)">
                  <path
                    d="M56.1503 49.9246L48.7116 35.0459C51.1465 31.4548 52.5706 27.1252 52.5706 22.4689C52.5706 10.0795 42.4911 0 30.1017 0C17.7123 0 7.63282 10.0795 7.63282 22.4689C7.63282 27.1252 9.05692 31.4552 11.4922 35.0468L4.05265 49.9246C3.78028 50.4698 3.80958 51.1166 4.12955 51.6348C4.44999 52.153 5.01578 52.4689 5.62507 52.4689H14.1601L19.2811 59.2969C19.6152 59.7418 20.1371 60 20.6873 60C21.4165 60 21.991 59.5651 22.2597 59.0282L29.313 44.9222C29.5748 44.9313 29.8376 44.9377 30.1017 44.9377C30.3658 44.9377 30.6286 44.9313 30.8904 44.9222L37.9436 59.0282C38.2114 59.5642 38.7864 60 39.5161 60C40.0658 60 40.5881 59.7418 40.9219 59.2969L46.0433 52.4689H54.5783C55.1876 52.4689 55.7534 52.153 56.0734 51.6348C56.3938 51.1166 56.4231 50.4698 56.1503 49.9246ZM20.3875 54.912L16.4452 49.6564C16.1133 49.2137 15.5924 48.9532 15.039 48.9532H8.46915L13.9239 38.0447C17.0211 41.2601 21.0641 43.5585 25.601 44.4846L20.3875 54.912ZM11.1484 22.4689C11.1484 12.0181 19.6509 3.51562 30.1017 3.51562C40.5524 3.51562 49.0549 12.0181 49.0549 22.4689C49.0549 32.9196 40.5524 41.4221 30.1017 41.4221C19.6509 41.4221 11.1484 32.9196 11.1484 22.4689ZM45.1639 48.9532C44.611 48.9532 44.09 49.2137 43.7577 49.6564L39.8159 54.912L34.602 44.4846C39.1393 43.558 43.1827 41.2601 46.28 38.0438L51.7338 48.9528H45.1639V48.9532Z"
                    fill="#008AFF"
                  />
                  <path
                    d="M39.0743 25.3844L43.9833 19.525C44.3724 19.0608 44.4951 18.4291 44.3079 17.8532C44.1207 17.2769 43.6501 16.8379 43.0628 16.691L35.6475 14.8361L31.5912 8.35648C31.2699 7.84286 30.7068 7.53113 30.1012 7.53113C29.4956 7.53113 28.9325 7.84286 28.6112 8.35648L24.5559 14.8361L17.141 16.691C16.5532 16.8379 16.0827 17.2769 15.8954 17.8528C15.7087 18.4291 15.8309 19.0608 16.22 19.525L21.129 25.3844L20.6008 33.0093C20.5591 33.6136 20.831 34.1968 21.3209 34.5529C22.0647 35.0935 22.8214 34.8376 23.0114 34.7612L30.1012 31.9038L37.1911 34.7617C37.7527 34.9878 38.3913 34.9091 38.8811 34.5534C39.3714 34.1972 39.6433 33.614 39.6016 33.0098L39.0743 25.3844ZM35.9244 23.6696C35.6324 24.0184 35.4868 24.4661 35.5184 24.9197L35.9006 30.4509L30.7586 28.3781C30.1886 28.1483 29.6888 28.2793 29.4443 28.3781L24.3023 30.4509L24.6854 24.9202C24.7165 24.4666 24.571 24.0184 24.2789 23.6696L20.7184 19.4202L26.0967 18.0748C26.538 17.9645 26.9188 17.6875 27.1601 17.3021L30.1017 12.6022L33.0437 17.3021C33.285 17.6875 33.6658 17.9645 34.1071 18.0748L39.4854 19.4202L35.9244 23.6696Z"
                    fill="#008AFF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_6562">
                    <rect width="60" height="60" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <div className="flex flex-col justify-center align-middle">
                <NumberCounter
                  className="increment text-3xl font-semibold leading-none mb-2"
                  end={14}
                  delay={5}
                  preFix=""
                  postFix=""
                ></NumberCounter>

                <p className="capitalize text-gray">Award</p>
              </div>
            </div>
          </div>
        </div>
        <div className="counter-line">
          <div className="flex">
            <div className="flex gap-[30px] ">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.75781 60H19.6965C20.6673 60 21.4543 59.213 21.4543 58.2422V56.2837C21.4543 52.22 19.1829 48.6769 15.843 46.8571C17.0292 45.5978 17.7585 43.9035 17.7585 42.041C17.7585 38.164 14.6043 35.0098 10.7272 35.0098C6.8502 35.0098 3.69598 38.164 3.69598 42.041C3.69598 43.9035 4.42523 45.5978 5.61141 46.8571C2.27145 48.6769 0 52.22 0 56.2837V58.2422C0 59.213 0.787031 60 1.75781 60ZM7.2116 42.041C7.2116 40.1025 8.78871 38.5254 10.7272 38.5254C12.6657 38.5254 14.2429 40.1025 14.2429 42.041C14.2429 43.9795 12.6657 45.5566 10.7272 45.5566C8.78871 45.5566 7.2116 43.9795 7.2116 42.041ZM10.7272 49.0723C14.4933 49.0723 17.9387 52.0246 17.9387 56.4844H3.51563C3.51563 52.0478 6.94102 49.0723 10.7272 49.0723Z"
                  fill="#008AFF"
                />
                <path
                  d="M54.3888 46.8571C55.575 45.5978 56.3043 43.9035 56.3043 42.041C56.3043 38.164 53.15 35.0098 49.273 35.0098C45.396 35.0098 42.2418 38.164 42.2418 42.041C42.2418 43.9035 42.971 45.5978 44.1572 46.8571C40.8173 48.6769 38.5459 52.2199 38.5459 56.2837V58.2422C38.5459 59.213 39.3329 60 40.3037 60H58.2423C59.2131 60 60.0001 59.213 60.0001 58.2422V56.2837C60.0001 52.22 57.7287 48.6769 54.3888 46.8571ZM45.7573 42.041C45.7573 40.1025 47.3344 38.5254 49.2729 38.5254C51.2114 38.5254 52.7885 40.1025 52.7885 42.041C52.7885 43.9795 51.2114 45.5566 49.2729 45.5566C47.3344 45.5566 45.7573 43.9795 45.7573 42.041ZM56.4845 56.4844H42.0614C42.0614 52.0478 45.4868 49.0723 49.2729 49.0723C53.0388 49.0723 56.4845 52.0242 56.4845 56.4844Z"
                  fill="#008AFF"
                />
                <path
                  d="M40.7268 23.2324V21.274C40.7268 17.2103 38.4554 13.6671 35.1155 11.8473C36.3016 10.588 37.0308 8.89371 37.0308 7.03125C37.0308 3.15422 33.8766 0 29.9996 0C26.1225 0 22.9683 3.15422 22.9683 7.03125C22.9683 8.89371 23.6976 10.588 24.8837 11.8473C21.5439 13.6671 19.2725 17.2103 19.2725 21.274V23.2324C19.2725 24.2032 20.0595 24.9902 21.0303 24.9902H38.969C39.9398 24.9902 40.7268 24.2032 40.7268 23.2324ZM26.4839 7.03125C26.4839 5.09273 28.0611 3.51562 29.9996 3.51562C31.9381 3.51562 33.5152 5.09273 33.5152 7.03125C33.5152 8.96977 31.9381 10.5469 29.9996 10.5469C28.0611 10.5469 26.4839 8.96977 26.4839 7.03125ZM37.2112 21.4746H22.788C22.788 17.038 26.2134 14.0625 29.9996 14.0625C33.7654 14.0625 37.2112 17.0145 37.2112 21.4746Z"
                  fill="#008AFF"
                />
                <path
                  d="M37.1011 44.4198C34.8045 45.1742 32.3828 45.5566 29.9036 45.5566C27.5112 45.5566 25.1685 45.1993 22.9407 44.4946C22.0148 44.2023 21.0273 44.715 20.7346 45.6405C20.4419 46.566 20.9549 47.5538 21.8805 47.8465C24.4516 48.6597 27.151 49.0721 29.9035 49.0721C32.7562 49.0721 35.5469 48.6305 38.1982 47.7597C39.1205 47.4568 39.6226 46.4634 39.3196 45.5411C39.0167 44.6189 38.0234 44.1166 37.1011 44.4198Z"
                  fill="#008AFF"
                />
                <path
                  d="M13.7962 14.5675C11.8549 16.4389 10.2046 18.6143 8.891 21.0337C7.52975 23.5409 6.58615 26.2041 6.08647 28.9494C5.89065 30.0253 6.71623 31.0222 7.81791 31.0222C8.65088 31.0222 9.3908 30.4275 9.54526 29.579C9.97815 27.2009 10.7975 24.8902 11.9805 22.7112C13.1223 20.6085 14.554 18.7201 16.2361 17.0987C16.935 16.425 16.9555 15.3122 16.2818 14.6132C15.608 13.9143 14.4953 13.8938 13.7962 14.5675Z"
                  fill="#008AFF"
                />
                <path
                  d="M46.2034 14.5677C45.5043 13.8938 44.3915 13.9145 43.7178 14.6134C43.0441 15.3124 43.0645 16.4252 43.7635 17.0989C45.4456 18.7203 46.8774 20.6086 48.0191 22.7114C49.2022 24.8905 50.0214 27.2012 50.4543 29.5791C50.628 30.5332 51.5421 31.1676 52.4984 30.9937C53.4535 30.8199 54.0869 29.9046 53.9131 28.9496C53.4134 26.2043 52.4698 23.5411 51.1086 21.0338C49.795 18.6145 48.1447 16.4389 46.2034 14.5677Z"
                  fill="#008AFF"
                />
              </svg>

              <div className="flex flex-col justify-center">
                <NumberCounter
                  className="increment text-3xl font-semibold leading-none mb-2"
                  end={43}
                  delay={5}
                  preFix=""
                  postFix=""
                ></NumberCounter>

                <p className="capitalize text-gray">Partners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="hr-style mt-[59px]" />
    </section>
  );
};

export default AboutBottom;
