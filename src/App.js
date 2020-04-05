import React, {useState} from 'react';
import {Col, Row, Slider} from 'antd';
import 'antd/dist/antd.min.css';
import "./App.css"

const initialWidth = 240;
const initialFontSize = 16;
const widthInEm = initialWidth / initialFontSize;

function App() {
    const [fontSize, setFontSize] = useState(initialFontSize);
    // const [ bodyFontSize, setBodyFontSizeActual ] = useState(initialFontSize);
    // const setBodyFontSize = fs => {
    //     window.document.body.style.fontSize = fs + "px";
    //     setBodyFontSizeActual(fs);
    // };
    return (
        <div>
            <Row>
                <Col span={8} offset={8}>
                    <h2>Font Size</h2>
                    <Slider value={fontSize} min={5} max={40} onChange={setFontSize}/>
                </Col>
            </Row>
            <div className="demo" style={{fontSize}}>
                <div>
                    <p>Actual Width: {initialWidth}px</p>
                    <p>Padding: {initialFontSize}px</p>
                    <div className={"window"}>
                        <div
                            className={"content px"}
                            style={{
                                width: initialWidth + "px",
                                padding: initialFontSize + "px",
                            }}
                        >
                            <h2>PX Sized</h2>
                        </div>
                    </div>
                </div>
                <div>
                    <p>Actual Width: {fontSize * widthInEm}px</p>
                    <p>Padding: 1em ({fontSize}px)</p>
                    <div className={"window"}>
                        <div
                            className={"content em"}
                            style={{
                                width: widthInEm + "em",
                                padding: "1em",
                            }}
                        >
                            <h2>EM Sized</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
