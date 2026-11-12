
import React from 'react';
import { View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles';

const Boat = ({title, icon_name, description, icon_color, poster}) => {
    return (
            <View style={styles.boatCard}>

                <Image source={poster} style={styles.boatImage}/>
                <View style={styles.boatContent}>

                    <View style={styles.boatTitleRow}>

                        <Ionicons name={icon_name} size={30}
                            color={icon_color} style={styles.boatIcon}/>

                        <Text style={styles.boatName}>
                            {title}
                        </Text>

                    </View>

                    {/* Boat Description */}
                    <Text style={styles.boatDescription}>
                        {description}
                    </Text>

                    {/* Decorative Line */}
                    <View style={styles.divider} />

                </View>
            </View>
    );
};
export default Boat;
