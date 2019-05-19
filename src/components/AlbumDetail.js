// import React from 'react'
// import { Text, View } from 'react-native'
// import Card from './Card'
// import CardSection from './CardSection'

// const style = {
//     thumbnailStyle: {
//         height: 50,
//         width: 50
//     }
// }

// const AlbumDetail = ({album}) => {
//     const {
//         title,
//         artist,
//         thumbnail_image,
//         image,
//         url
//     } = album;
//     return (
//     <Card>
//         <CardSection>
//             <View>
//                 <Image
//                     style={styles.thumbnailStyle}
//                     source={{ uri: thumbnail_image }}
//                 />
//             </View>
//             <View>
//                 <Text>{title}</Text>
//                 <Text>{artist}</Text>
//             </View>
//         </CardSection>
//     </Card>
//     );
// };

// export default AlbumDetail;

import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

// const AlbumDetail = (props) => {
//     return (
//         <Card>
//             <Text>{props.album.title}</Text>
//         </Card>
//     );
// };

const AlbumDetail = ({album}) => {
    const {
        title,
        artist,
        thumbnail_image,
        image,
        url
    } = album;

    const styles = {
        thumbnailStyle: {
            height: 50,
            width: 50
        },
        headerContentStyle: {
            justifyContent: 'space-around'
        },
        headerTextStyle: {
            fontSize: 18
        },
        thumbnailContainerStyle: {
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10,
            marginRight: 10
        },
        imageStyle: {
            height: 300,
            flex:1
        }
    };

    const {
        headerContentStyle,
        headerTextStyle,
        thumbnailStyle,
        thumbnailContainerStyle,
        imageStyle,
    } = styles;

    return (
        <Card>
        <CardSection>
            <View style={thumbnailContainerStyle}>
                <Image
                    style={thumbnailStyle}
                    source={{ uri: thumbnail_image }}
                />
            </View>
            <View style={headerContentStyle}>
                <Text style={headerTextStyle}>{title}</Text>
                <Text>{artist}</Text>
            </View>
        </CardSection>
        <CardSection>
            <Image
                style={imageStyle}
                source={{ uri: image }}
            />
        </CardSection>
        <CardSection>
            <Button onPress={() => Linking.openURL(url)}>
                Buy Now
            </Button>
        </CardSection>
    </Card>
    );
};

export default AlbumDetail;