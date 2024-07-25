import {View, StyleSheet, Text, TextInput, Alert, TouchableOpacity, Image} from 'react-native'
import CustomInputBox from "../ui/CustomInputBox";
import Spacer from "../ui/Spacer";
import { useForm, Controller } from "react-hook-form";
import Button from "../ui/Button";
import {useState} from "react";
import * as ImagePicker from 'expo-image-picker';
import {Colors} from "../../theme/Colors";


type FormData = {
    firstName: string
    lastName: string
    // email : string
};

function UserForm(props) {

    const { control, handleSubmit } = useForm<FormData>();
    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState(null);


    const onSubmit = (data : FormData) =>{
        setLoading(true)
        setTimeout(()=> {
            setLoading(false)
            Alert.alert("Profile updated successfully.")
        }, 3000)

    }


    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <>
            <View style={styles.imageContainer}>
                <TouchableOpacity style={styles.imageBackground} onPress={pickImage}  >
                    <Image style={styles.image} source={ image ? { uri : image }  : require("../../../assets/user.png") }/>
                </TouchableOpacity>
                <Text style={styles.uploadImageButton}>Upload photo</Text>
            </View>
            <CustomInputBox hint={"Enter your name"} control={control} name={"firstname"} rules={{required : "Please enter first name"}}/>
            <CustomInputBox hint={"Enter your email"} control={control} name={"lastname"} rules={{
                required: 'Email is required',
                pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: 'Invalid email address',
                },
            }}/>

            <Button label="Upadte Profile" onPress={handleSubmit(onSubmit)} loading={loading} />





            {/*<InputBox hint={"Enter your name"} />*/}
            {/*<InputBox hint={"Enter your email address"} />*/}
            {/*<InputBox hint={"Enter your password"}  isPassword={true}/>*/}
            {/*<View style={styles.container}>*/}
            {/*    <View style={styles.boxContainer}>*/}
            {/*        <InputBox hint={"City"}  />*/}
            {/*    </View>*/}
            {/*    <Spacer width={10}/>*/}
            {/*    <View style={styles.boxContainer}>*/}
            {/*        <InputBox hint={"Pin-code"} keyboardType={"number-pad"} />*/}

            {/*    </View>*/}


            {/*</View>*/}

            {/*<Button label="Upadte Profile" onPress={handleSubmit(onSubmit)}  />*/}

        </>
    );
}

export default UserForm;

const styles = StyleSheet.create({
    imageBackground: {
        padding: 3,
        backgroundColor: Colors.ringInner,
        borderRadius: 50
    },
    imageContainer : {
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
