import {View, StyleSheet, ScrollView, TouchableOpacity, Image, Text, TextInput} from 'react-native'
import HeadingInfo from "../components/homescreen/HeadingInfo";
import {Layout} from "../theme/GlobalStyle";
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import {Colors} from "../theme/Colors";
import Spacer from "../components/ui/Spacer";
import Button from "../components/ui/Button";

function UserProfile(props) {
    return (
        <ScrollView style={styles.scrollContainer}>
            <TouchableOpacity>
                <ArrowLeftIcon size={25} color={Colors.textGray800}/>
            </TouchableOpacity>
            <Spacer height={25}/>
            <HeadingInfo line1="You can update your" line2={"profile "} highlight="Here"/>

            <View style={styles.container}>
                <TouchableOpacity style={styles.imageContainer}>
                    <Image style={styles.image} source={require("../../assets/user.png")}/>
                </TouchableOpacity>
                <Text style={styles.uploadImageButton}>Upload photo</Text>

                <View>

                    <TextInput />
                </View>


                <Button label="Upadte Profile" />
          </View>
        </ScrollView>
    );
}

export default UserProfile;

const styles = StyleSheet.create({
    scrollContainer: {
        ...Layout.container,
        paddingHorizontal:20,
        backgroundColor : Colors.white,

    },

    container : {
        alignItems : "center",
        marginTop : 30
    },
    imageContainer : {
        padding : 3,
        backgroundColor: Colors.ringInner,
        borderRadius : 50

    },
    image : {
        width : 100,
        height : 100,
        borderRadius : 60
    },
    uploadImageButton : {
        marginVertical : 10,
        color : Colors.textGray,
        fontWeight : "bold"
    }
})
