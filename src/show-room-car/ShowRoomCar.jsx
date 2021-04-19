import React, { Component } from "react";
import ButtonColor from "./ButtonColor";
import Car from "./Car";

class ShowRoomCar extends Component {
    state = {
        carImg: "./img/car/products/red-car.jpg",
        btnColorList: [
            {
                name: "black",
                imgSrc: "./img/car/icons/icon-black.jpg",
            },
            {
                name: "red",
                imgSrc: "./img/car/icons/icon-red.jpg",
            },
            {
                name: "silver",
                imgSrc: "./img/car/icons/icon-silver.jpg",
            },
            {
                name: "steel",
                imgSrc: "./img/car/icons/icon-steel.jpg",
            },
        ],
    };

    // carImg = "./img/car/products/red-car.jpg"; // vì ko chạy lại render

    handleChoiceColor = (color) => {
        console.log(color);
        // dùng switch case
        switch (color) {
            case "black":
                // this.carImg = "./img/car/products/black-car.jpg";
                this.setState({
                    carImg: "./img/car/products/black-car.jpg",
                });
                break;
            case "red":
                this.setState({
                    carImg: "./img/car/products/red-car.jpg",
                });
                break;
            case "silver":
                this.setState({
                    carImg: "./img/car/products/silver-car.jpg",
                });
                break;
            case "steel":
                this.setState({
                    carImg: "./img/car/products/steel-car.jpg",
                });
                break;
            default:
                break;
        }

        console.log("this.carImg:", this.carImg);
    };

    renderColorList = () => {
        return this.state.btnColorList.map((btnColor) => {
            return (
                <ButtonColor
                    btnColor={btnColor}
                    handleChoiceColor={this.handleChoiceColor}
                />
            );
        });
    };

    render() {
        return (
            <section className="show-room">
                <h2 className="text-center">Bài Tập Chọn Màu Xe</h2>
                <div className="container">
                    <div className="chose__color d-flex justify-content-around">
                        {this.renderColorList()}
                    </div>
                    <Car carImg={this.state.carImg} />
                </div>
            </section>
        );
    }
}

export default ShowRoomCar;
