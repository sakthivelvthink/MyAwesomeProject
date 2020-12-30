import React from 'react';
import { StyleSheet, View, Image, Text, PanResponder } from 'react-native';

export default class ImageResizeContainer extends React.Component {
    oldImageLayout = {
        height: 200,
        width: 200,
        x: 0,
        y: 0
    }
    constructor() {
        super();

        this.panResponder;

        this.state = {

            locationX: 110,

            locationY: 115,

        }
    }

    componentWillMount() {
        this.panResponder = PanResponder.create(
            {
                onStartShouldSetPanResponder: (event, gestureState) => true,

                onStartShouldSetPanResponderCapture: (event, gestureState) => true,

                onMoveShouldSetPanResponder: (event, gestureState) => false,

                onMoveShouldSetPanResponderCapture: (event, gestureState) => false,

                onPanResponderGrant: (event, gestureState) => false,

                onPanResponderMove: (event, gestureState) => false,

                onPanResponderRelease: (event, gestureState) => {
                    this.setState({

                        locationX: event.nativeEvent.locationX.toFixed(2),

                        locationY: event.nativeEvent.locationY.toFixed(2)

                    });
                }
            });
    }

    render() {
        return (
            <View style={styles.MainContainer}>


                <View>

                    <Text style={styles.text}>X: {this.state.locationX}, Y: {this.state.locationY}</Text>

                </View>


                <View style={styles.childView}>
                    <Image source={require("../img/maurits-bausenhart-QMRN_GX7p4I-unsplash.jpg")} style={{ width: "100%", height: "100%", resizeMode: "stretch", backgroundColor: 'transparent' }}  {...this.panResponder.panHandlers} onLayout={this.onLayout} />
                    <View style={[styles.point, { left: parseFloat(this.state.locationX - 15), top: parseFloat(this.state.locationY - 15) }]} />
                </View>


            </View>
        );
    }
    onLayout = event => {
        if (this.state.dimensions) return // layout was already called
        console.log("layout", event.nativeEvent.layout)
        this.calculateCoordinatePoint(this.state.locationX,this.state.locationY,this.oldImageLayout,event.nativeEvent.layout)
    }
    calculateCoordinatePoint = (x, y,oldlayout,newlayout) => {
        let rationOfWidth = oldlayout.width > newlayout.width ? oldlayout.width/newlayout.width : newlayout.width/oldlayout.width
        let rationOfHeight = oldlayout.height > newlayout.height ? oldlayout.height/newlayout.height : newlayout.height/oldlayout.height
   this.setState({locationX: oldlayout.width > newlayout.width ? x/rationOfWidth : x*rationOfWidth,locationY : oldlayout.height > newlayout.height ? y/rationOfHeight : y*rationOfHeight})
    }

}

const styles = StyleSheet.create(
    {
        MainContainer:
        {
            width: 300,
            height: 500,
            marginTop: 200
        },

        childView:
        {
            width: 600,
            height: 600,
            marginTop: 10,
            backgroundColor: '#263238',
            overflow: 'hidden'
        },

        text:
        {
            fontSize: 22,
            fontWeight: 'bold',
            color: '#fff',
            textAlign: 'center',
            padding: 8,
            backgroundColor: '#607D8B',
        },

        point:
        {
            height: 27,
            width: 27,
            position: 'absolute',
            borderRadius: 15,
            backgroundColor: '#FF3D00'
        }
    });