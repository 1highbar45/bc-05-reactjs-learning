import React, { Component } from "react";
import "./styles.scss";
import BanChoi from "./BanChoi";
import KetQua from "./KetQua";
import BtnPlay from "./BtnPlay";
class AppXucXac extends Component {
    state = {
        banChon: true, // true là tài, false là xỉu
        soBanThang: 0,
        soBanChoi: 0,
        xucXacs: [
            {
                imgSrc: "./img/gameXucXac/1.png",
                diem: 1,
            },
            {
                imgSrc: "./img/gameXucXac/2.png",
                diem: 2,
            },
            {
                imgSrc: "./img/gameXucXac/6.png",
                diem: 6,
            },
        ],
    };

    render() {
        // const banChon=this.state.banChon;
        // const soBanChoi=this.state.soBanChoi;
        // const soBanThang=this.state.soBanThang;

        const { banChon, soBanThang, soBanChoi, xucXacs } = this.state;
        return (
            <div
                className="gameXucXac"
                style={{
                    backgroundImage: 'url("./img/gameXucXac/bgGame.png")',
                    width: "100%",
                    height: "100%",
                    position: "fixed",
                    left: 0,
                    top: 0,
                }}
            >
                <div className="container">
                    <h3 className="display-4 text-center">
                        BÀI TẬP GAME XÚC XẮC
                    </h3>
                    <BanChoi xucXacs={xucXacs} />
                </div>
                <KetQua
                    banChon={banChon}
                    soBanThang={soBanThang}
                    soBanChoi={soBanChoi}
                />
                <div className="text-center">
                    <BtnPlay />
                </div>
            </div>
        );
    }
}

export default AppXucXac;
