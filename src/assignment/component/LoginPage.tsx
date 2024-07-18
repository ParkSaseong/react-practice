import React, {useState} from "react";
import styled from "styled-components";
import styles from "../styles/loginpage.module.scss"

function LoginPage() {
    const [name, SetName] = useState<string>();
    const [password, SetPassword] = useState<string>();

    const LoginOnClick = () => {

    }

    return (
        <div className={styles.loginpage}>
            <div>
                <h1>DeamHome</h1>
            </div>
            {/*wrapper*/}
            <div>
                <Wrapper>
                    <div className={styles.inwrapper}>
                        <div>
                            <label aria-label="아이디">
                                <input id="아이디" placeholder="아이디" className={styles.input}/>
                            </label>
                            <label aria-label="비밀번호">
                                <input id="비밀번호" placeholder="비밀번호" className={styles.input}/>
                            </label>
                        </div>

                        <div>
                            <label aria-label="간편로그인" className={styles.checkbox}>
                                <input id="간편로그인" type="checkbox"/>간편 로그인 저장
                            </label>
                        </div>

                        <div>
                            <label aria-label="로그인">
                                <input className={styles.loginbutton} id="로그인" type="button" value="로그인"
                                       onClick={LoginOnClick}/>
                            </label>
                        </div>

                        <div className={styles.extraButtons}>
                            <label aria-label="회원가입" className={styles.extrabuttonLeft}>
                                <input id="회원가입" type="button" value="회원가입"/>
                            </label>
                            <label aria-label="계정찾기" className={styles.extrabuttonRight}>
                                <input id="계정찾기" type="button" value="계정찾기" />
                            </label>
                            <label aria-label="비밀번호찾기" className={styles.extrabuttonRight}>
                                <input id="비밀번호찾기" type="button" value="비밀번호 찾기"/>
                            </label>
                        </div>

                        {/*<div className={styles.extraButtons}>*/}
                        {/*    <label aria-label="회원가입" className={styles.extrabutton}>*/}
                        {/*        <input id="회원가입" type="button" value="회원가입"/>*/}
                        {/*    </label>*/}
                        {/*    <label aria-label="계정찾기" className={styles.extrabutton}>*/}
                        {/*        <input id="계정찾기" type="button" value="계정찾기"/>*/}
                        {/*    </label>*/}
                        {/*    <label aria-label="비밀번호찾기" className={styles.extrabutton}>*/}
                        {/*        <input id="비밀번호찾기" type="button" value="비밀번호 찾기"/>*/}
                        {/*    </label>*/}
                        {/*</div>*/}
                    </div>
                </Wrapper>
            </div>
        </div>
    );
}

interface WrapperProps {
    children: React.ReactNode
}

interface StyleDivProps {
    borderColor: string
}

const StyleDiv = styled.div<StyleDivProps>`
    border: 2px solid ${props => props.borderColor};
    padding: 16px;
    margin: 20px auto;
    width: 600px;
    height: 400px;
`

const Wrapper = ({children}: WrapperProps) => {
    return (
        <StyleDiv borderColor="black">
            {children}
        </StyleDiv>
        // <div>
        //
        // </div>
    );
}

export default LoginPage;