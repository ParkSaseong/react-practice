import React from 'react';
import Wrapper from "./wrapper";
import Text from "./text";
import './App.css';

interface TextItem {
    text: string;
    color: string;
}

function App() {
    const arr: TextItem[] = [
        { text: "한 글자", color: "black" },
        { text: "두 글자", color: "red" },
        { text: "세 글자", color: "blue" }
    ];

    return (
        <div className="App">
            <Wrapper>
                <Text text={arr[0].text} color={arr[0].color} />
                <Text text={arr[1].text} color={arr[1].color} />
            </Wrapper>
            <Text text={arr[2].text} color={arr[2].color} />
        </div>
    );
}

export default App;
