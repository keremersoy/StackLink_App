import { View, Text, Image ,Button} from 'react-native'
import React from 'react'
import styles from './Profile.Style'
export default function Profile() {

    function goToEditPage(){


    }
    return (
        <View style={styles.Page} >
            <View style={styles.Flex1}>
                
                <View style={styles.top_container}>
                    <Image
                        style={styles.Image}
                    />
                    <Text style={styles.usernameText}>
                        USERNAME
                    </Text>
                </View>

                <View style = {styles.txtDuzenle}>
                <Button title='Düzenle' onPress={goToEditPage}/>
                </View>
                

                <View >
                    <View style = {styles.txtDuzenle}>
                        <Text style = {styles.txtEmail}>
                            EMAİL
                        </Text>
                        <Text style = {styles.txtDuzenle}>
                            GİTHUB
                        </Text>
                    </View>
                </View>

            
            </View>
              

            <View style={styles.Flex2}>
                
                <Text>Flatlist gelice</Text>
                <Text>Flatlist gelicek</Text>


               </View>

                
        </View>
    );
};