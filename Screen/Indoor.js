import { Image as RNimage } from 'react-native'
import { StyleSheet } from 'react-native';
import Canvas, { Image as CanvasImage } from 'react-native-canvas';
import imagePng from '../Image/khaly.jpg'
import React, { Component } from 'react';



export default class Indoor extends Component {
    handleCanvas = (canvas) => {
        if (!(canvas instanceof Canvas)) {
            return;
        }
        const image = new CanvasImage(canvas);
        canvas.width = 1000;
        canvas.height = 1000;

        const context = canvas.getContext('2d');
        const imageUri = RNimage.resolveAssetSource(imagePng).uri

        image.src = imageUri
        image.addEventListener('load', () => {
            context.drawImage(image, 0, 0, 370, 500)
            context.fillStyle = 'red';
            context.font = '40px georgia';
            context.fillText('.', 340, 22);
        })

    }


    render() {
        return (
            <Canvas ref={this.handleCanvas} />
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
