import {View, StyleSheet, Text, TextInput, Alert} from 'react-native'
import CustomInputBox from "../ui/CustomInputBox";
import Spacer from "../ui/Spacer";
import { useForm, Controller } from "react-hook-form";
import Button from "../ui/Button";

type FormData = {
    firstName: string
    lastName: string
    // email : string
};

function UserForm(props) {

    const { control, handleSubmit } = useForm<FormData>();

    const onSubmit = (data : FormData) =>{
        console.log("PROFILE SUBMIT", data)
    }

    return (
        <>
            <CustomInputBox hint={"Enter your first name"} control={control} name={"firstname"} rules={{required : true}}/>
            <CustomInputBox hint={"Enter your last name"} control={control} name={"lastname"} rules={{required : true}}/>

            <Button label="Upadte Profile" onPress={handleSubmit(onSubmit)}  />





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

})
