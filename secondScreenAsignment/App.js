import React, { useState } from 'react';

import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import { Picker } from '@react-native-picker/picker';

import { BottomNavigation } from 'react-native-paper';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import Svg, { Path, G,Circle, Defs, Rect, ClipPath,} from 'react-native-svg';

import MapView from 'react-native-maps';

const JesseIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" color={'black'}>
    <G clip-path="url(#clip0_1_15533)">
      <Path d="M1.3374 5.43523H20.6629C21.4003 5.43523 22 4.83556 22 4.09814C22 3.36072 21.4003 2.76074 20.6629 2.76074H1.3374C0.599981 2.76074 0 3.36072 0 4.09814C0 4.83556 0.599981 5.43523 1.3374 5.43523Z" fill="black"/>
      <Path d="M20.6629 9.6626H1.3374C0.599981 9.6626 0 10.2626 0 11C0 11.7374 0.599981 12.3371 1.3374 12.3371H20.6629C21.4003 12.3371 22 11.7374 22 11C22 10.2626 21.4003 9.6626 20.6629 9.6626Z" fill="black"/>
      <Path d="M10.6629 16.5645H1.3374C0.599981 16.5645 0 17.1648 0 17.9022C0 18.6396 0.599981 19.2393 1.3374 19.2393H10.6629C11.4003 19.2393 12 18.6396 12 17.9022C12 17.1648 11.4003 16.5645 10.6629 16.5645Z" fill="black"/>
    </G>
  </Svg>
);

const TestIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path d="M11.999 0C5.38508 3.77983e-06 0 5.37904 0 11.9951C0 18.6112 5.38508 24 11.999 24C18.613 24 24 18.6112 24 11.9951C24 5.37904 18.613 3.77983e-06 11.999 0ZM11.0032 2.04313V21.9491C5.93993 21.4505 1.99943 17.1937 1.99943 11.9951C1.99943 6.79658 5.93997 2.54168 11.0032 2.04313Z" fill="#2B58BC"/>
  </Svg>
)

const ContactIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path d="M12 24C9.9416 24 7.9128 23.4624 6.1096 22.4424L2.4528 23.54C1.8888 23.708 1.2792 23.556 0.8616 23.1392C0.4448 22.7224 0.2912 22.1128 0.4608 21.548L1.5576 17.8912C0.5376 16.088 0 14.0592 0 12.0008C0 5.3832 5.3832 0 12 0C18.6168 0 24 5.3832 24 12C24 18.6168 18.6168 24 12 24ZM6.2136 20.776C6.3584 20.776 6.5016 20.8152 6.628 20.892C8.2568 21.8792 10.1144 22.4008 12 22.4008C17.7344 22.4008 22.4 17.7352 22.4 12.0008C22.4 6.2664 17.7344 1.6 12 1.6C6.2656 1.6 1.6 6.2656 1.6 12C1.6 13.8856 2.1216 15.7432 3.108 17.372C3.2248 17.5656 3.2552 17.8 3.1904 18.016L1.9936 22.0064L5.9832 20.8088C6.0584 20.7864 6.136 20.776 6.2136 20.776ZM13.8384 19.7752C12.3736 19.7752 10.9352 19.1048 9.9944 17.8568C9.2496 16.8696 8.552 15.828 7.9192 14.7616C7.2872 13.696 6.7088 12.584 6.2 11.456C5.1896 9.2192 6.0168 6.5896 8.1256 5.34L8.6576 5.0248C9.0248 4.8072 9.4544 4.7456 9.8696 4.8512C10.284 4.9568 10.632 5.2176 10.8496 5.5856L12.0736 7.6496C12.2912 8.0168 12.3536 8.448 12.2472 8.8616C12.1416 9.276 11.8808 9.624 11.5128 9.8416C11.1336 10.0664 11.008 10.5584 11.2328 10.9376L12.8648 13.6904C13.0896 14.0696 13.5816 14.1952 13.9608 13.9704C14.3288 13.7528 14.76 13.6904 15.1736 13.7968C15.588 13.9024 15.936 14.1632 16.1536 14.5312L17.3776 16.5952C17.8272 17.3536 17.576 18.3376 16.8176 18.7872L16.2848 19.1024C15.5192 19.556 14.6752 19.7744 13.8392 19.7744L13.8384 19.7752ZM9.4728 6.4008L8.9408 6.7168C7.5352 7.5504 6.984 9.304 7.6576 10.7976C8.1424 11.872 8.6936 12.9312 9.2952 13.9464C9.8968 14.9624 10.5616 15.9536 11.2712 16.8944C12.2576 18.2024 14.0608 18.5616 15.468 17.728L16 17.4128L14.776 15.348C14.224 15.6752 13.5776 15.7672 12.9576 15.6088C12.3368 15.4504 11.8152 15.0584 11.488 14.508L9.856 11.7552C9.1816 10.6168 9.5584 9.1416 10.6968 8.4672L9.4728 6.4024V6.4008Z" fill="#2B58BC"/>
  </Svg>
)

const ZoneIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <G clip-path="url(#clip0_1_15505)">
    <Path d="M8.15625 11.25H3.09375C1.38783 11.25 0 9.86217 0 8.15625V3.09375C0 1.38783 1.38783 0 3.09375 0H8.15625C9.86217 0 11.25 1.38783 11.25 3.09375V8.15625C11.25 9.86217 9.86217 11.25 8.15625 11.25ZM3.09375 1.5C2.21494 1.5 1.5 2.21494 1.5 3.09375V8.15625C1.5 9.03506 2.21494 9.75 3.09375 9.75H8.15625C9.03506 9.75 9.75 9.03506 9.75 8.15625V3.09375C9.75 2.21494 9.03506 1.5 8.15625 1.5H3.09375Z" fill="#2B58BC"/>
    <Path d="M20.9062 11.25H15.8438C14.1378 11.25 12.75 9.86217 12.75 8.15625V3.09375C12.75 1.38783 14.1378 0 15.8438 0H20.9062C22.6122 0 24 1.38783 24 3.09375V8.15625C24 9.86217 22.6122 11.25 20.9062 11.25ZM15.8438 1.5C14.9649 1.5 14.25 2.21494 14.25 3.09375V8.15625C14.25 9.03506 14.9649 9.75 15.8438 9.75H20.9062C21.7851 9.75 22.5 9.03506 22.5 8.15625V3.09375C22.5 2.21494 21.7851 1.5 20.9062 1.5H15.8438Z" fill="#2B58BC"/>
    <Path d="M18.375 24C15.2734 24 12.75 21.4766 12.75 18.375C12.75 15.2734 15.2734 12.75 18.375 12.75C21.4766 12.75 24 15.2734 24 18.375C24 21.4766 21.4766 24 18.375 24ZM18.375 14.25C16.1005 14.25 14.25 16.1005 14.25 18.375C14.25 20.6495 16.1005 22.5 18.375 22.5C20.6495 22.5 22.5 20.6495 22.5 18.375C22.5 16.1005 20.6495 14.25 18.375 14.25Z" fill="#2B58BC"/>
    <Path d="M8.15625 24H3.09375C1.38783 24 0 22.6122 0 20.9062V15.8438C0 14.1378 1.38783 12.75 3.09375 12.75H8.15625C9.86217 12.75 11.25 14.1378 11.25 15.8438V20.9062C11.25 22.6122 9.86217 24 8.15625 24ZM3.09375 14.25C2.21494 14.25 1.5 14.9649 1.5 15.8438V20.9062C1.5 21.7851 2.21494 22.5 3.09375 22.5H8.15625C9.03506 22.5 9.75 21.7851 9.75 20.9062V15.8438C9.75 14.9649 9.03506 14.25 8.15625 14.25H3.09375Z" fill="#2B58BC"/>
  </G>
  <Defs>
    <ClipPath id="clip0_1_15505">
      <Rect width="24" height="24" fill="white"/>
    </ClipPath>
  </Defs>
</Svg>
)

const HistoryIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <G clip-path="url(#clip0_1_15574)">
    <Path d="M11.8912 12.9787L16.3912 16.3537C16.7227 16.6024 17.1926 16.5352 17.4412 16.2037C17.6899 15.8722 17.6228 15.4024 17.2913 15.1537L13.125 12V5.625C13.125 5.21062 12.7894 4.875 12.375 4.875C11.9606 4.875 11.625 5.21062 11.625 5.625V12.375C11.625 12.624 11.7292 12.8482 11.8912 12.9787Z" fill="#2B58BC"/>
    <Path d="M12.75 0.75C7.26038 0.75 2.57251 4.71225 1.65751 10.125L1.37251 9.70125C1.14038 9.35738 0.673882 9.26663 0.330007 9.49875C-0.0138676 9.73088 -0.104618 10.1974 0.127507 10.5413L1.62751 12.7913C1.75088 12.9788 1.95188 13.1014 2.17501 13.125H2.25001C2.44876 13.1243 2.63888 13.0448 2.77876 12.9037L4.65376 11.0287C4.94663 10.7359 4.94663 10.2604 4.65376 9.9675C4.36088 9.67463 3.88538 9.67463 3.59251 9.9675L3.12751 10.4362C3.99113 5.121 9.00001 1.51275 14.3149 2.37637C19.6298 3.24 23.2388 8.2485 22.3751 13.5637C21.6083 18.2835 17.5316 21.7507 12.75 21.75C9.73426 21.8048 6.88201 20.382 5.11126 17.94C4.87088 17.6025 4.40251 17.5234 4.06501 17.7638C3.72751 18.0041 3.64838 18.4725 3.88876 18.81C5.93926 21.6495 9.24826 23.3074 12.75 23.25C18.9634 23.25 24 18.2134 24 12C24 5.78662 18.9634 0.75 12.75 0.75Z" fill="#2B58BC"/>
  </G>
  <Defs>
    <ClipPath id="clip0_1_15574">
      <Rect width="24" height="24" fill="white"/>
    </ClipPath>
  </Defs>
</Svg>
)

const TestIconInactive = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <G clip-path="url(#clip0_1_15570)">
      <Path d="M11.999 0C5.38509 3.77983e-06 3.8147e-06 5.37904 3.8147e-06 11.9951C3.8147e-06 18.6112 5.38509 24 11.999 24C18.613 24 24 18.6112 24 11.9951C24 5.37904 18.613 3.77983e-06 11.999 0ZM11.0032 2.04313V21.9491C5.93994 21.4505 1.99944 17.1937 1.99944 11.9951C1.99944 6.79658 5.93998 2.54168 11.0032 2.04313Z" fill="#8E8E93"/>
    </G>
    <Defs>
    <ClipPath id="clip0_1_15570">
      <Rect width="24" height="24" fill="white"/>
    </ClipPath>
    </Defs>
  </Svg>
)

const ContactIconInactive = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <Path d="M12 24C9.9416 24 7.9128 23.4624 6.1096 22.4424L2.4528 23.54C1.8888 23.708 1.2792 23.556 0.8616 23.1392C0.4448 22.7224 0.2912 22.1128 0.4608 21.548L1.5576 17.8912C0.5376 16.088 0 14.0592 0 12.0008C0 5.3832 5.3832 0 12 0C18.6168 0 24 5.3832 24 12C24 18.6168 18.6168 24 12 24ZM6.2136 20.776C6.3584 20.776 6.5016 20.8152 6.628 20.892C8.2568 21.8792 10.1144 22.4008 12 22.4008C17.7344 22.4008 22.4 17.7352 22.4 12.0008C22.4 6.2664 17.7344 1.6 12 1.6C6.2656 1.6 1.6 6.2656 1.6 12C1.6 13.8856 2.1216 15.7432 3.108 17.372C3.2248 17.5656 3.2552 17.8 3.1904 18.016L1.9936 22.0064L5.9832 20.8088C6.0584 20.7864 6.136 20.776 6.2136 20.776ZM13.8384 19.7752C12.3736 19.7752 10.9352 19.1048 9.9944 17.8568C9.2496 16.8696 8.552 15.828 7.9192 14.7616C7.2872 13.696 6.7088 12.584 6.2 11.456C5.1896 9.2192 6.0168 6.5896 8.1256 5.34L8.6576 5.0248C9.0248 4.8072 9.4544 4.7456 9.8696 4.8512C10.284 4.9568 10.632 5.2176 10.8496 5.5856L12.0736 7.6496C12.2912 8.0168 12.3536 8.448 12.2472 8.8616C12.1416 9.276 11.8808 9.624 11.5128 9.8416C11.1336 10.0664 11.008 10.5584 11.2328 10.9376L12.8648 13.6904C13.0896 14.0696 13.5816 14.1952 13.9608 13.9704C14.3288 13.7528 14.76 13.6904 15.1736 13.7968C15.588 13.9024 15.936 14.1632 16.1536 14.5312L17.3776 16.5952C17.8272 17.3536 17.576 18.3376 16.8176 18.7872L16.2848 19.1024C15.5192 19.556 14.6752 19.7744 13.8392 19.7744L13.8384 19.7752ZM9.4728 6.4008L8.9408 6.7168C7.5352 7.5504 6.984 9.304 7.6576 10.7976C8.1424 11.872 8.6936 12.9312 9.2952 13.9464C9.8968 14.9624 10.5616 15.9536 11.2712 16.8944C12.2576 18.2024 14.0608 18.5616 15.468 17.728L16 17.4128L14.776 15.348C14.224 15.6752 13.5776 15.7672 12.9576 15.6088C12.3368 15.4504 11.8152 15.0584 11.488 14.508L9.856 11.7552C9.1816 10.6168 9.5584 9.1416 10.6968 8.4672L9.4728 6.4024V6.4008Z" fill="#8E8E93"/>
  </Svg>
)

const ZoneIconInactive = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <G clip-path="url(#clip0_1_15505)">
    <Path d="M8.15625 11.25H3.09375C1.38783 11.25 0 9.86217 0 8.15625V3.09375C0 1.38783 1.38783 0 3.09375 0H8.15625C9.86217 0 11.25 1.38783 11.25 3.09375V8.15625C11.25 9.86217 9.86217 11.25 8.15625 11.25ZM3.09375 1.5C2.21494 1.5 1.5 2.21494 1.5 3.09375V8.15625C1.5 9.03506 2.21494 9.75 3.09375 9.75H8.15625C9.03506 9.75 9.75 9.03506 9.75 8.15625V3.09375C9.75 2.21494 9.03506 1.5 8.15625 1.5H3.09375Z" fill="#8E8E93"/>
    <Path d="M20.9062 11.25H15.8438C14.1378 11.25 12.75 9.86217 12.75 8.15625V3.09375C12.75 1.38783 14.1378 0 15.8438 0H20.9062C22.6122 0 24 1.38783 24 3.09375V8.15625C24 9.86217 22.6122 11.25 20.9062 11.25ZM15.8438 1.5C14.9649 1.5 14.25 2.21494 14.25 3.09375V8.15625C14.25 9.03506 14.9649 9.75 15.8438 9.75H20.9062C21.7851 9.75 22.5 9.03506 22.5 8.15625V3.09375C22.5 2.21494 21.7851 1.5 20.9062 1.5H15.8438Z" fill="#8E8E93"/>
    <Path d="M18.375 24C15.2734 24 12.75 21.4766 12.75 18.375C12.75 15.2734 15.2734 12.75 18.375 12.75C21.4766 12.75 24 15.2734 24 18.375C24 21.4766 21.4766 24 18.375 24ZM18.375 14.25C16.1005 14.25 14.25 16.1005 14.25 18.375C14.25 20.6495 16.1005 22.5 18.375 22.5C20.6495 22.5 22.5 20.6495 22.5 18.375C22.5 16.1005 20.6495 14.25 18.375 14.25Z" fill="#8E8E93"/>
    <Path d="M8.15625 24H3.09375C1.38783 24 0 22.6122 0 20.9062V15.8438C0 14.1378 1.38783 12.75 3.09375 12.75H8.15625C9.86217 12.75 11.25 14.1378 11.25 15.8438V20.9062C11.25 22.6122 9.86217 24 8.15625 24ZM3.09375 14.25C2.21494 14.25 1.5 14.9649 1.5 15.8438V20.9062C1.5 21.7851 2.21494 22.5 3.09375 22.5H8.15625C9.03506 22.5 9.75 21.7851 9.75 20.9062V15.8438C9.75 14.9649 9.03506 14.25 8.15625 14.25H3.09375Z" fill="#8E8E93"/>
  </G>
  <Defs>
    <ClipPath id="clip0_1_15505">
      <Rect width="24" height="24" fill="white"/>
    </ClipPath>
  </Defs>
</Svg>
)

const HistoryIconInactive = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <G clip-path="url(#clip0_1_15574)">
    <Path d="M11.8912 12.9787L16.3912 16.3537C16.7227 16.6024 17.1926 16.5352 17.4412 16.2037C17.6899 15.8722 17.6228 15.4024 17.2913 15.1537L13.125 12V5.625C13.125 5.21062 12.7894 4.875 12.375 4.875C11.9606 4.875 11.625 5.21062 11.625 5.625V12.375C11.625 12.624 11.7292 12.8482 11.8912 12.9787Z" fill="#8E8E93"/>
    <Path d="M12.75 0.75C7.26038 0.75 2.57251 4.71225 1.65751 10.125L1.37251 9.70125C1.14038 9.35738 0.673882 9.26663 0.330007 9.49875C-0.0138676 9.73088 -0.104618 10.1974 0.127507 10.5413L1.62751 12.7913C1.75088 12.9788 1.95188 13.1014 2.17501 13.125H2.25001C2.44876 13.1243 2.63888 13.0448 2.77876 12.9037L4.65376 11.0287C4.94663 10.7359 4.94663 10.2604 4.65376 9.9675C4.36088 9.67463 3.88538 9.67463 3.59251 9.9675L3.12751 10.4362C3.99113 5.121 9.00001 1.51275 14.3149 2.37637C19.6298 3.24 23.2388 8.2485 22.3751 13.5637C21.6083 18.2835 17.5316 21.7507 12.75 21.75C9.73426 21.8048 6.88201 20.382 5.11126 17.94C4.87088 17.6025 4.40251 17.5234 4.06501 17.7638C3.72751 18.0041 3.64838 18.4725 3.88876 18.81C5.93926 21.6495 9.24826 23.3074 12.75 23.25C18.9634 23.25 24 18.2134 24 12C24 5.78662 18.9634 0.75 12.75 0.75Z" fill="#8E8E93"/>
  </G>
  <Defs>
    <ClipPath id="clip0_1_15574">
      <Rect width="24" height="24" fill="white"/>
    </ClipPath>
  </Defs>
</Svg>
)

 const accountIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <g clip-path="url(#clip0_1_15498)">
        <path d="M11.999 0C5.38508 3.77983e-06 0 5.37904 0 11.9951C0 18.6112 5.38508 24 11.999 24C18.613 24 24 18.6112 24 11.9951C24 5.37904 18.613 3.77983e-06 11.999 0ZM11.0032 2.04313V21.9491C5.93993 21.4505 1.99943 17.1937 1.99943 11.9951C1.99943 6.79658 5.93997 2.54168 11.0032 2.04313Z" fill="#2B58BC"/>
      </g>
      <defs>
        <clipPath id="clip0_1_15498">
          <rect width="24" height="24" fill="white"/>
        </clipPath>
      </defs>
      </svg>
    `

export default function App() {
  // state for the bottom navigation
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'jesse', title: 'Jesse' },
    { key: 'contacts', title: 'Contacts' },
    { key: 'zone', title: 'Zone'},
    { key: 'history', title: 'History' },
  ]);

  // bottom navigation
  const renderScene = BottomNavigation.SceneMap({
    jesse: JesseRoute,
    contacts: ContactsRoute,
    zone: BridgeRoute,
    history: HistoryRoute,
  });

  const activeIcons = {
    jesse: <TestIcon />,
    contacts: <ContactIcon />,
    zone: <ZoneIcon />,
    history: <HistoryIcon />,
  };

  const inactiveIcons = {
    jesse: <TestIconInactive />,
    contacts: <ContactIconInactive />,
    zone: <ZoneIconInactive />,
    history: <HistoryIconInactive />,
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <View style={styles.amburg}>
          <JesseIcon/>
        </View>
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
          renderIcon={({ route, focused }) => (focused ? activeIcons[route.key] : inactiveIcons[route.key])}
        />
          
      </View>
    </SafeAreaProvider>
  );
}


// Jesse route component
function JesseRoute() {
  

  const [selectedValue, setSelectedValue] = useState(null);
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  return (
      <View style={styles.jesse}>
        <Text style={styles.jesseTitle}>Test Device</Text>
        <View style={styles.jessenotallow}>
          <View style={styles.circleicon}>
            <Svg xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none">
              <Circle cx="1.5" cy="1.5" r="1.5" fill="#EB3924"/>
            </Svg>
          </View>
          <View>
            <Text style={styles.circleText}>Not on Test</Text>
          </View>
        </View>
        
        <View style={styles.dropdown}>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, ) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Jesse’s Juice Bar" value="option1" style={styles.option}/>
            <Picker.Item label="Jesse Brown" value="option2" style={styles.option}/>
            <Picker.Item label="Jhon Brown" value="option3" style={styles.option}/>
          </Picker>
        </View>

        <View style={styles.jesseAddress}>
            <Text style={styles.jesseAdreessText}>ADDRESS{'\n'}</Text>
            <View style={styles.AddressContainer}>
              <Svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" style={styles.phoneIcon}>
                <Path d="M9 0C5.40545 0 2.48108 2.92437 2.48108 6.51888C2.48108 10.9798 8.31487 17.5287 8.56325 17.8053C8.79655 18.0651 9.20387 18.0647 9.43674 17.8053C9.68512 17.5287 15.5189 10.9798 15.5189 6.51888C15.5188 2.92437 12.5945 0 9 0ZM9 9.79871C7.19149 9.79871 5.7202 8.32739 5.7202 6.51888C5.7202 4.71037 7.19152 3.23909 9 3.23909C10.8085 3.23909 12.2798 4.71041 12.2798 6.51892C12.2798 8.32743 10.8085 9.79871 9 9.79871Z" fill="white" fill-opacity="0.4"/>
              </Svg>
              <Text style={styles.jesseAdreesslocation}>56 Smoothie Street Bridgewater, NJ{'\n'}</Text>
            </View>

            <View style={styles.horizontalLine} />

            <View style={styles.AddressContainers}>
              <Svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" style={styles.phoneIcon}>
                <G clip-path="url(#clip0_1_15517)">
                  <Path d="M8.63742 11.0703C7.09395 9.80117 6.06336 8.23509 5.52155 7.34398L5.11739 6.58205C5.2587 6.43043 6.33634 5.27648 6.80334 4.65038C7.39021 3.86418 6.53933 3.15412 6.53933 3.15412C6.53933 3.15412 4.14515 0.759609 3.59952 0.28463C3.05388 -0.191014 2.42578 0.0731587 2.42578 0.0731587C1.27898 0.81414 0.0901229 1.45836 0.0188012 4.55662C0.0161412 7.45737 2.21814 10.4492 4.59935 12.7654C6.98439 15.3812 10.259 18.003 13.425 18C16.5229 17.9294 17.1669 16.7407 17.9079 15.5939C17.9079 15.5939 18.1723 14.9663 17.6971 14.4201C17.2216 13.8742 14.8268 11.4795 14.8268 11.4795C14.8268 11.4795 14.1172 10.6284 13.3309 11.2158C12.7448 11.6539 11.6925 12.6283 11.4389 12.8645C11.4394 12.8653 9.67899 11.9269 8.63742 11.0703Z" fill="white" fill-opacity="0.4"/>
                </G>
                <Defs>
                  <ClipPath id="clip0_1_15517">
                  <Rect width="18" height="18" fill="white"/>
                  </ClipPath>
                </Defs>
              </Svg>
            
              <View style={styles.jesseAdreesslocations}>
                <Text style={styles.jesseAdreesslocationText}>(555) 99 87 58 047 </Text> 
                <Text style={styles.jesseAdreesslocationText}> Account: 07 57 047</Text>
              </View>
            
            </View>
            
        </View>


        <View style={styles.dropdown}>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, ) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="All Zones"  value="option1" style={styles.option}/>
            <Picker.Item label="Jesse’s Juice Bar" value="option2" style={styles.option}/>
            <Picker.Item label="Test Length - 2 hours" value="option3" style={styles.option}/>
          </Picker>
        </View>

        <View style={styles.dropdown}>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, ) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Test Length - 2 hours" value="option1" style={styles.option}/>
            <Picker.Item label="Jesse Brown" value="option2" style={styles.option}/>
            <Picker.Item label="Jhon Brown" value="option3" style={styles.option}/>
          </Picker>

          

        </View>
        <TextInput
            style={styles.input}
            placeholder="Comment"
            placeholderTextColor="#C7C7CC"
        />

        <TextInput
            style={styles.input}
            placeholder="Passcode"
            placeholderTextColor="#C7C7CC"
        />


      <TouchableOpacity style={styles.loginButton} >
        <Text style={styles.buttonText}>Place on Test</Text>
      </TouchableOpacity> 
      </View>
  );
}

// Define the Contacts route component
function ContactsRoute() {
  const [selectedValue, setSelectedValue] = useState(null);
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  return (
    <View style={styles.jesse}>
        <Text style={styles.jesseTitle}>Contact for Devices</Text>
        
        <View style={styles.dropdown}>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, ) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Jesse’s Juice Bar" value="option1" style={styles.option}/>
            <Picker.Item label="Jesse Brown" value="option2" style={styles.option}/>
            <Picker.Item label="Jhon Brown" value="option3" style={styles.option}/>
          </Picker>
        </View>

        <View style={styles.jesseAddress}>
            <Text style={styles.jesseAdreessText}>ADDRESS{'\n'}</Text>
            <View style={styles.AddressContainer}>
              <Svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" style={styles.phoneIcon}>
                <Path d="M9 0C5.40545 0 2.48108 2.92437 2.48108 6.51888C2.48108 10.9798 8.31487 17.5287 8.56325 17.8053C8.79655 18.0651 9.20387 18.0647 9.43674 17.8053C9.68512 17.5287 15.5189 10.9798 15.5189 6.51888C15.5188 2.92437 12.5945 0 9 0ZM9 9.79871C7.19149 9.79871 5.7202 8.32739 5.7202 6.51888C5.7202 4.71037 7.19152 3.23909 9 3.23909C10.8085 3.23909 12.2798 4.71041 12.2798 6.51892C12.2798 8.32743 10.8085 9.79871 9 9.79871Z" fill="white" fill-opacity="0.4"/>
              </Svg>
              <Text style={styles.jesseAdreesslocation}>56 Smoothie Street Bridgewater, NJ{'\n'}</Text>
            </View>

            <View style={styles.horizontalLine} />

            <View style={styles.AddressContainers}>
              <Svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" style={styles.phoneIcon}>
                <G clip-path="url(#clip0_1_15517)">
                  <Path d="M8.63742 11.0703C7.09395 9.80117 6.06336 8.23509 5.52155 7.34398L5.11739 6.58205C5.2587 6.43043 6.33634 5.27648 6.80334 4.65038C7.39021 3.86418 6.53933 3.15412 6.53933 3.15412C6.53933 3.15412 4.14515 0.759609 3.59952 0.28463C3.05388 -0.191014 2.42578 0.0731587 2.42578 0.0731587C1.27898 0.81414 0.0901229 1.45836 0.0188012 4.55662C0.0161412 7.45737 2.21814 10.4492 4.59935 12.7654C6.98439 15.3812 10.259 18.003 13.425 18C16.5229 17.9294 17.1669 16.7407 17.9079 15.5939C17.9079 15.5939 18.1723 14.9663 17.6971 14.4201C17.2216 13.8742 14.8268 11.4795 14.8268 11.4795C14.8268 11.4795 14.1172 10.6284 13.3309 11.2158C12.7448 11.6539 11.6925 12.6283 11.4389 12.8645C11.4394 12.8653 9.67899 11.9269 8.63742 11.0703Z" fill="white" fill-opacity="0.4"/>
                </G>
                <Defs>
                  <ClipPath id="clip0_1_15517">
                  <Rect width="18" height="18" fill="white"/>
                  </ClipPath>
                </Defs>
              </Svg>
            
              <View style={styles.jesseAdreesslocations}>
                <Text style={styles.jesseAdreesslocationText}>(555) 99 87 58 047 </Text> 
                <Text style={styles.jesseAdreesslocationText}> Account: 07 57 047</Text>
              </View>
            
            </View>
            
        </View>

        <Text style={styles.phoneContact}>Phone{'\n'}</Text>

        <View style={styles.contactAddress}>
            
            <View style={styles.contactAddressContainer}>
              <Svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                <Circle cx="13.5" cy="13.5" r="9.5" fill="#D9D9D9"/>
              </Svg>
              <Text style={styles.contactAdreesslocationText}>56 Smoothie Street Bridgewater, NJ{'\n'}</Text>
            </View>

            <View style={styles.contacthorizontalLine} />

            <View style={styles.AddressContainers}>
            <Svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none" >
                <Circle cx="13.5" cy="13.5" r="9.5" fill="#ffffff"/>
              </Svg>
            
              <View style={styles.jesseAdreesslocations}>
                <Text style={styles.contactAdreesslocationText}>(555) 99 87 58 047 </Text> 
                <Text style={styles.contactAdreesslocationText}> Account: 07 57 047</Text>
              </View>
            
            </View>
            
        </View>
      </View>
  );
}

//Bridge route component
function BridgeRoute() {
  return (
    <View style={styles.bridge}>
      <Text style={styles.bridgeTitle}>Bridge Zone</Text>
      <MapView
        style={styles.bridgeMap}
        initialRegion={{
          latitude: 40.5544,
          longitude: -74.4644,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      {/* We can add code for displaying the bridge markers here */}
    </View>
  );
}

// History route component
function HistoryRoute() {
  return (
    <View style={styles.history}>
      <Text style={styles.historyTitle}>History</Text>
      {/* we can add code for displaying the history list here */}
    </View>
  );
}

//Styling components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  contactAddress: {
    backgroundColor: '#ffffff',
    width: 350,
    borderRadius: 20,
  },
  placeContact: {
    color: 'black',
  },
  jesse: {
    flex: 1,
    alignItems: 'left',
    backgroundColor: '#f8f8f8',
    paddingLeft: 20,
  },
  jesseTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
  },
  jesseAddress: {
    fontSize: 16,
    textAlign: 'left',
    backgroundColor: '#3981F3',
    width: 350,
    height: 198,
    flex: 0,
    flexDirection: "column",
    padding: 15,
    borderRadius: 20,
  },
  jesseAdreessText: {
    color: 'white',
    fontSize: 15,
    
    opacity: 0.8,
  },
  jesseTest: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f00',
    margin: 10,
  },
  jesseAdreesslocation: {
    color: 'white',
    fontSize: 17,
  },
  contactAddressContainer:{
    flex: 0,
    flexDirection: 'row',
    alignContent: 'center',
    marginLeft: 10,
    marginBottom: 8,
    marginTop: 10,
    width: 350,
    height: 40,
    flex: 0,
  },
  AddressContainer:{
    flex: 0,
    flexDirection: 'row',
    alignContent: 'center',
    marginLeft: 10,
    marginBottom: 8,
    marginTop: 10,
  },
  AddressContainers:{
    flex: 0,
    flexDirection: 'row',
    alignContent: 'center',
    marginLeft: 10,
    marginBottom: 8,
    marginTop: 20,
  },
  contactAdreesslocationText:{
    marginLeft: 10,
    fontSize: 18,
    color: '#000',
  },
  phoneIcon:{
    opacity: 0.7,
    marginRight: 15,
  },
  horizontalLine:{
    borderBottomColor: 'white', 
    borderBottomWidth: 0.5, 
    width: 300,
    marginLeft: 40,
  },
  jesseAdreesslocationText:{
    color: 'white',
    fontSize: 17,
  },
  contacts: {
    flex: 1,
    backgroundColor: '#fff',
  },
  jesseTitles: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  contactsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    margin: 15,
  },
  bridge: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bridgeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00a',
    margin: 10,
  },
  bridgeMap: {
    flex: 1,
  },
  history: {
    flex: 1,
    backgroundColor: '#fff',
  },
  historyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00a',
    margin: 10,
  },
  amburg: {
    marginTop: 40,
    marginLeft: 20,
  },
  jessenotallow:{
    borderWidth: 0.5,
    width: 100,
    height: 25,
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 10,
    borderRadius: 25,
    borderColor: '#EB3924',
    marginBottom: 10,
  },
  circleicon: {
    borderWidth: 0.6,
    width: 12,
    height: 12,
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    borderColor: '#EB3924',
  },
  circleText:{
    color: '#EB3924',
  },
  dropdown: {
    backgroundColor: '#ffffff',
    width: 350,
    height: 44,
    flexShrink: 1,
    paddingRight: 30,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#FFF',
  },
  option: {
    color: '#000',
    fontSize: 17,
    fontWeight: 400,
  },
  input:{
    width: 349,
    height: 40,
    borderWidth: 1,
    borderColor: '#C7C7CC',
    padding: 10,
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
    borderRadius:10,
    color: 'white',
  },
  buttonText:{
    color: '#ffffff',
    fontSize: 20,
  },
  loginButton: {
    width: 300,
    height: 44,
    backgroundColor: '#2B58BC',
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginTop: 10,
    borderRadius: 25,
  },
  phoneContact: {
    fontSize: 12,
    margin: 10,
    marginTop: 20,
    textTransform: 'uppercase',
    color: '#8E8E93'
  },
  jesseContact:{
    color: 'black',
    fontSize: 17,
  },
  contacthorizontalLine:{
    borderBottomColor: '#C7C7CC', 
    borderBottomWidth: 0.4, 
    width: 300,
    marginLeft: 40,

  }
});
