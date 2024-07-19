import {View, StyleSheet, ScrollView, TouchableOpacity, Image, Text, TextInput} from 'react-native'
import HeadingInfo from "../components/homescreen/HeadingInfo";
import {Layout} from "../theme/GlobalStyle";
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import {Colors} from "../theme/Colors";
import Spacer from "../components/ui/Spacer";
import Button from "../components/ui/Button";
import UserForm from "../components/userprofilescreen/UserForm";

function UserProfile({navigation}) {

    const handleBackPress = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBarContainer}>
                <TouchableOpacity style={styles.backIconContainer} onPress={handleBackPress}>
                    <ArrowLeftIcon size={25} color={Colors.textGray800}/>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.scrollContainer}>
                <HeadingInfo line1="You can update your" line2={"profile "} highlight="Here"/>
                <View style={styles.profileContainer}>

                    <View style={styles.imageContainer}>
                        <TouchableOpacity style={styles.imageBackground}>
                            <Image style={styles.image} source={require("../../assets/user.png")}/>
                        </TouchableOpacity>
                        <Text style={styles.uploadImageButton}>Upload photo</Text>
                    </View>

                    <UserForm/>

                </View>
            </ScrollView>
        </View>
    );
}

export default UserProfile;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1
    },
    topBarContainer: {
        flexDirection: "row",
        shadowColor: 'black',
    },
    backIconContainer: {
        padding: 12,
    },
    scrollContainer: {
        ...Layout.container,
        paddingHorizontal: 20,
        backgroundColor: Colors.white,
    },
    profileContainer: {
        marginTop: 30
    },
    imageBackground: {
        padding: 3,
        backgroundColor: Colors.ringInner,
        borderRadius: 50
    },
    imageContainer : {
        width : "100%",
        alignItems : "center"
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 60
    },
    uploadImageButton: {
        marginVertical: 10,
        color: Colors.textGray,
        fontWeight: "bold"
    }
})
