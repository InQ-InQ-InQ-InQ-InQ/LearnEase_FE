import React from 'react';
import styles from '../style/SignUp.module.css';
import sample from '../img/sample.png';

function SignUp() {
  return (
    <div className={styles.viewport}>
      <div className={styles.box}>
        <img src={sample} alt="" />
        <div className={styles.contents}>
          <div className={styles.wrap}>
            <p>Email</p>
            <div>
              <input type="email" className={styles.input} />
              <button type="button" className={styles.button}>
                Send Email
              </button>
            </div>
          </div>
          <div className={styles.wrap}>
            <p>Certification Number</p>
            <div>
              <input type="number" className={styles.input} />
              <button type="button" className={styles.button}>
                Confirm
              </button>
            </div>
          </div>
          <div className={styles.wrap}>
            <p>Password</p>
            <input type="password" className={styles.input2} />
          </div>
          <div className={styles.wrap}>
            <p>Nickname</p>
            <input type="text" className={styles.input2} />
          </div>

          <button type="button" className={styles.startBtn}>
            Get Started!
          </button>
        </div>
      </div>
    </div>
    /* <div className="h-[832px] w-[1280px] overflow-hidden bg-white text-left text-xs text-white">
      <div className="rounded-8xs bg-darkgray absolute left-[calc(50%_-_420px)]
      top-[calc(50%_-_271px)] h-[576px] w-[886px] [filter:blur(50px)]" />
      <div className="rounded-mini bg-whitesmoke-200 absolute left-[calc(50%_-_420px)]
      top-[calc(50%_-_271px)] h-[542px] w-[840px]" />
      <div className="text-3xs text-tomato absolute left-[900px] top-[269px] leading-[24px]">
        3분 55초
      </div>
      <img src={sample} alt="" />

      <div className="rounded-8xs bg-gainsboro absolute left-[762px]
      top-[553px] h-[51px] w-[187px]" />
      <b className="absolute left-[793px] top-[567px] text-xl">Get Started!</b>
      <div className="rounded-8xs bg-gainsboro absolute left-[949px]
      top-[209px] h-[49px] w-[74px]" />
      <b className="absolute left-[968px] top-[218px] text-center">
        <p className="m-0">Send</p>
        <p className="m-0">Email</p>
      </b>
      <div className="rounded-8xs bg-gainsboro absolute left-[949px]
      top-[293px] h-[49px] w-[74px]" />
      <b className="absolute left-[961px] top-[310px] text-center">Confirm</b>
      <div className="absolute left-[694px] top-[362px] text-black">
        Password
      </div>
      <div className="rounded-8xs absolute left-[694px] top-[209px]
      box-border h-[49px] w-[244px] border-[1px] border-solid border-black" />
      <div className="rounded-8xs absolute left-[694px] top-[384px]
       box-border h-[49px] w-[312px] border-[1px] border-solid border-black" />
      <div className="absolute left-[694px] top-[453px] text-black">
        Nickname
      </div>
      <div className="rounded-8xs absolute left-[694px] top-[475px]
      box-border h-[49px] w-[312px] border-[1px] border-solid border-black" />
      <div className="rounded-8xs absolute left-[694px] top-[293px]
      box-border h-[49px] w-[244px] border-[1px] border-solid border-black" />
      <div className="absolute left-[694px] top-[188px] text-black">Email</div>
      <div className="absolute left-[694px] top-[273px] text-black">
        Certification Number
      </div>
    </div> */
  );
}
export default SignUp;
