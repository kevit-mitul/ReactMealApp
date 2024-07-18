import {View, StyleSheet, ScrollView} from 'react-native'
import HeadingInfo from "../components/homescreen/HeadingInfo";

function UserProfile(props) {
    return (
        <ScrollView style={styles.container}>
            <HeadingInfo/>
        </ScrollView>
    );
}

export default UserProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
