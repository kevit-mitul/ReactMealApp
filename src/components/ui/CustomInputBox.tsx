import {View, StyleSheet, TextInput, TouchableOpacity, Text} from 'react-native'
import {MagnifyingGlassIcon} from "react-native-heroicons/outline";
import {Colors} from "../../theme/Colors";
import {Control, Controller, FieldValue} from "react-hook-form";

type InputBoxProps = {
    hint : string,
    name? :string
    isPassword? : boolean
    keyboardType? : "numeric" | "default" | "number-pad",
    control : Control<FieldValue<any>>
    rules? : Object



}

function CustomInputBox({ control, name, hint = "",  keyboardType = "default", isPassword, rules ={}  } : InputBoxProps) {
    return (
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } , fieldState  }) => (
                    <View>
                        <View style={[styles.textInputContainer, { borderColor : fieldState.error ? "red" : "" } ]}>

                            <TextInput
                                placeholder={hint}
                                secureTextEntry={isPassword}
                                keyboardType={keyboardType}
                                autoCapitalize="none"
                                onBlur={onBlur}
                                value={value}
                                onChangeText={onChange}
                                style={styles.searchInput}/>

                        </View>

                        <Text style={styles.errorText}> {fieldState.error ? fieldState.error.message || "Error in field" : ""  } </Text>
                    </View>


                )}
                name={name}
                rules={rules}
                defaultValue=""
            />


    );
}

export default CustomInputBox;

const styles = StyleSheet.create({
    textInputContainer : {
        marginVertical:10,
        paddingHorizontal:15,
        backgroundColor : Colors.bgGray,
        borderRadius : 99,

        borderWidth : 1,

    },

    searchInput : {
        padding : 12,
        flex : 1,


    },

    errorText : {
        color : "red"
    }
})
