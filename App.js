import { Button, Image, ScrollView, Text, TextInput, View } from "react-native";
import "expo-dev-client";

export default function App() {
  return (
    <>
      <ScrollView>
        <View className="box-border m-0 p-0">
          {/* 1st Content */}
          <View>
            <Image
              className="relative object-cover"
              source={require("./assets/img/rectangle.png")}
            />
            <View className="border-gray-100 my-6 absolute items-center justify-center  left-0 top-[15px] p-7 o shadow-2xl shadow-black bg-white w-[375px] h-[53px] outline-none">
              <Image
                className="absolute h-6 w-6  left-5 justify-center items-center"
                source={require("./assets/icon/menu.png")}
              />
              <Image
                className="absolute h-[45px] w-[45px]  left-[160px] justify-center items-center"
                source={require("./assets/icon/Logo.png")}
              />

              <Image
                className="absolute h-8 w-8 left-[250px]"
                source={require("./assets/icon/cart.png")}
              />
              <Image
                className="absolute h-6 w-6 left-[300px]"
                source={require("./assets/icon/star.png")}
              />
            </View>
            <View className="absolute top-[112px] left-[108px]">
              <Image className="" source={require("./assets/img/1.png")} />
            </View>
            <View className="absolute top-[294px] left-[19px]">
              <Image className="" source={require("./assets/img/2.png")} />
            </View>
            <View className="absolute top-[497px] left-[174px]">
              <Image source={require("./assets/img/3.png")} />
            </View>
            <View className="absolute top-[406px] left-[104px] shadow-md shadow-black items-center w-[179.75px] p-4 bg-white rounded-full">
              <Text className="font-semibold">Shop Now</Text>
            </View>
            {/* 2nd Content */}
            <View className="relative my-4">
              <View className="relative left-[86px] top-[10px]">
                <Image source={require("./assets/img/4.png")} />
                <View className="absolute bg-white rounded-full w-[127.66px] h-[25.99px] align-center left-11 top-[250px]">
                  <Text className="text-center">Sweatshirts</Text>
                </View>
              </View>
              <View className="relative left-[86px] top-[10px] mt-3 ">
                <Image source={require("./assets/img/4.png")} />
                <View className="absolute bg-white rounded-full w-[127.66px] h-[25.99px] align-center left-11 top-[250px]">
                  <Text className="text-center">Hoodies</Text>
                </View>
              </View>
              <View className="relative left-[86px] top-[10px] mt-3 ">
                <Image source={require("./assets/img/4.png")} />
                <View className="absolute bg-white rounded-full w-[127.66px] h-[25.99px] align-center left-11 top-[250px]">
                  <Text className="text-center">Pair</Text>
                </View>
              </View>
            </View>
            {/* 3rd Content */}
            <View className="relative">
              <View className="border-gray-50  my-6 relative items-center justify-center  left-0 top-[15px] p-7 shadow-lg shadow-black  bg-white w-[375px] h-[53px] outline-none">
                <Text className=" absolute text-red-600 text-center font-semibold text-[35px]">
                  SHOP
                </Text>
              </View>
              <View className="grid grid-cols-2">
                <View className="relative">
                  <View className=" absolute left-[15px]">
                    <Image
                      className="w-[141px] h-[200px]"
                      source={require("./assets/img/4.png")}
                    />
                    <View className="absolute bg-[#E0CA9E] px-1 py-1 left-[110px] top-2">
                      <Text className="text-white">15% Off</Text>
                    </View>
                    <Text className="font-bold text-[20px]">Lorem Ipsum</Text>
                    <Text className="font-normal text-[15px]">Lorem Ipsum</Text>
                  </View>
                  <View className="left-[189px]">
                    <Image
                      className="w-[141px] h-[200px]"
                      source={require("./assets/img/4.png")}
                    />
                    <View className="absolute bg-[#E0CA9E] px-1 py-1 left-[110px] top-2">
                      <Text className="text-white">15% Off</Text>
                    </View>
                    <Text className="font-bold text-[20px]">Lorem Ipsum</Text>
                    <Text className="font-normal text-[15px]">Lorem Ipsum</Text>
                  </View>
                </View>
              </View>
              <View className="grid grid-cols-2 mt-2">
                <View className="relative">
                  <View className=" absolute left-[15px]">
                    <Image
                      className="w-[141px] h-[200px]"
                      source={require("./assets/img/4.png")}
                    />
                    <View className="absolute bg-[#E0CA9E] px-1 py-1 left-[110px] top-2">
                      <Text className="text-white">15% Off</Text>
                    </View>
                    <Text className="font-bold text-[20px]">Lorem Ipsum</Text>
                    <Text className="font-normal text-[15px]">Lorem Ipsum</Text>
                  </View>
                  <View className="left-[189px]">
                    <Image
                      className="w-[141px] h-[200px]"
                      source={require("./assets/img/4.png")}
                    />
                    <View className="absolute bg-[#E0CA9E] px-1 py-1 left-[110px] top-2">
                      <Text className="text-white">15% Off</Text>
                    </View>
                    <Text className="font-bold text-[20px]">Lorem Ipsum</Text>
                    <Text className="font-normal text-[15px]">Lorem Ipsum</Text>
                  </View>
                </View>
              </View>
              <View className=" bg-white shadow-lg shadow-black w-[124px] h-[40px] rounded-full left-[125px] my-11 ">
                <Text className="text-center top-1 font-medium text-[18px]">
                  More
                </Text>
              </View>
            </View>
            {/* 4th Content */}
            <View>
              <View>
                {/* Logo */}
                <View className="left-[26px]">
                  <Image source={require("./assets/icon/Logo.png")} />
                  <View className="top-16" />
                </View>
                {/* Contacts */}
                <View>
                  <View className=" left-[26px] top-5 ">
                    <Image source={require("./assets/icon/contact.png")} />
                    <View className="left-[60px] bottom-[132px]">
                      <Text className=" ">Lorem ipsum dolor sit amet,</Text>
                      <Text className="">consectetur adipiscing elit</Text>
                    </View>
                  </View>
                  <View className="left-[86px] bottom-[100px]">
                    <Text>Lorem Ipsum</Text>
                  </View>
                  <View className="left-[86px] bottom-[73px]">
                    <Text>Lorem ipsum dolor sit amet</Text>
                  </View>
                </View>
                {/* Social Media */}
                <View>
                  <View className="bottom-6 left-5">
                    <Image source={require("./assets/icon/socmed.png")} />
                  </View>
                </View>
                {/* Text */}
                <View>
                  <View className="left-[47px] my-2">
                    <Text className="font-semibold text-[18px]">
                      COLLECTION
                    </Text>
                  </View>
                  <View className="left-[47px] my-2">
                    <Text className="font-semibold text-[18px]">
                      INFORMATION
                    </Text>
                  </View>
                  <View className="left-[47px] my-2">
                    <Text className="font-semibold text-[18px]">MORE</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
