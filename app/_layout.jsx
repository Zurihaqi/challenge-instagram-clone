import { TamaguiProvider, createTamagui } from "@tamagui/core";

import { config } from "@tamagui/config/v3";
import Navbar from "@/components/Navbar";
import Stories from "@/components/Stories";
import BottomTabBar from "@/components/BottomTabBar";
import Feeds from "@/components/Feeds";
import { ScrollView } from "tamagui";

const tamaguiConfig = createTamagui(config);

export default () => {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Navbar />
      <ScrollView>
        <Stories />
        <Feeds />
      </ScrollView>
      <BottomTabBar />
    </TamaguiProvider>
  );
};
