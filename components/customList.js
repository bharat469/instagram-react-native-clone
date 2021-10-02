import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CustomList = () => {
    return (
        <View>
            <TouchableOpacity style={styles.ChatsBtn} onPress={ChatMessage}>

                <ListItem  >
                    <Avatar
                        title={item.name[0]}
                        source={item.avatar_url}
                        rounded
                        size='large'
                    />
                    <ListItem.Content>
                        <ListItem.Title style={styles.nameStyle}>{item.name}</ListItem.Title>
                        <ListItem.Subtitle style={{ fontWeight: click ? '500' : '900' }}>{item.message}</ListItem.Subtitle>
                    </ListItem.Content>
                </ListItem>
            </TouchableOpacity>
        </View>
    )
}

export default CustomList

const styles = StyleSheet.create({})
