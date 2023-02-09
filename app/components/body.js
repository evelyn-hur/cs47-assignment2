import {View, StyleSheet, Text, ImageBackground, Image} from 'react-native';
import Profiles from "../../assets/Profiles";
import Icons from "../../assets/Icons";
import themes from '../../assets/Themes/themes';

const Body = () => {
    return (
        <View style={styles.body}> 
            <ImageBackground 
                source = {Profiles.mtl.image} 
                style={[styles.profileImage, Themes.light.shadows]} 
                imageStyle={styles.imageStyle} 
            > 
                <Text style={styles.nameText}>{Profiles.mtl.name}</Text> 
                <Text style={styles.captionText}>{Profiles.mtl.caption}</Text>
            </ImageBackground>

            <View style={[styles.audioBox, Themes.light.shadows]}>
                <Text style={styles.audioText}>My hottest take</Text>
                <Image source={Icons.player.light} style={[styles.audioImage, styles.playerImage]} />
                <Image source={Icons.audioWave.light} style={[styles.audioImage, styles.waveImage]} />
            </View> 

        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        paddingHorizontal: 40,
    },
    audioBox: {
        width: 310,
        height: 170,
        marginTop: 30,
        backgroundColor: themes.light.bgSecondary,
        padding: 20,
        borderRadius: 30,
        // justifyContent: "space-between",
    },
    audioImage: {
        flexDirection: "row",
        justifyContent: "space-between"
    }, 
    playerImage: {
        width: 50,
        height: 50, 
        // aspectRatio: 1,
    },
    waveImage: {
        width: 200,
        height: 50, 
        // aspectRatio: 1 / 0.2,
        resizeMode: 'contain',
    },
    profileImage: {
        width: "100%",
        height: undefined, 
        aspectRatio: 1 / 1.1,
        justifyContent: 'space-between',
        backgroundColor: themes.light.shadows,
    },
    imageStyle: {
        borderRadius: 10,
    },
    nameText: {
        padding: 12,
        color: 'white',
        fontFamily: 'Sydney',
        fontSize: 32,
    },
    captionText: {
        padding: 12,
        color: 'white',
        fontFamily: 'Sydney',
        fontSize: 18,
    },
    audioText: {
        color: 'black',
        fontFamily: 'Sydney',
        fontSize: 23,
    },
});

export default Body;