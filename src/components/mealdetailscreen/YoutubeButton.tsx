import {View, StyleSheet, TouchableOpacity, Text, Linking, Alert} from 'react-native'
import {Colors} from "../../theme/Colors";
import Size from "../../theme/Size";

type YoutubeButtonProps = {
    url: string;
}

function YoutubeButton({url} : YoutubeButtonProps ) {

    const handleYoutubeClick = () =>{
        Linking.canOpenURL(url).then(supported => {
            if(supported){
                Linking.openURL(url);
            }else{
                Alert.alert("Invalid URL")
            }
        })
    }


    return (
        <TouchableOpacity style={styles.youtubeButton} onPress={handleYoutubeClick} >
            <Text style={styles.youtubeText}>Watch on Youtube</Text>
        </TouchableOpacity>
    );
}

export default YoutubeButton;

const styles = StyleSheet.create({
    youtubeButton : {
        backgroundColor : Colors.primary,
        borderRadius : 99,
        paddingVertical : 10,
        marginBottom : 30

    },
    youtubeText : {

        borderRadius : 99,
        textAlign:"center",
        color : Colors.white,
        fontSize : Size.lg
    }
})
