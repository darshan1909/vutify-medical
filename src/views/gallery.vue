<template>
  <v-layout row wrap>
    <v-flex md4 class="lg5-custom" >
      <v-card class="ma-5" shaped elevation="10" height="750px">
        <v-list>
          <v-list-item>
            <v-list-item-avatar
              size="10"
              color="cyan darken-1"
            ></v-list-item-avatar>
            <v-list-item-title class="ml-n2">Kognum</v-list-item-title>
            <v-list-item-subtitle>10 mg</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="cyan--text text--darken-1"
              >MON</v-list-item-title
            >
            <v-list-item-title class="cyan--text text--darken-1"
              >WED</v-list-item-title
            >
            <v-list-item-title class="cyan--text text--darken-1"
              >FRI</v-list-item-title
            >
            <v-list-item-title class="cyan--text text--darken-1"
              >SUN</v-list-item-title
            >
          </v-list-item>
          <v-list-item class="mt-n5">
            <v-list-item-subtitle
              >2 times in a day before food</v-list-item-subtitle
            >
          </v-list-item>
          <v-divider></v-divider>
        </v-list>
        <v-list two-line subheader>
          <v-list-item>
            <v-list-item-avatar size="35">
              <img src="img4.png" />
            </v-list-item-avatar>
            <v-list-item-content class="ml-n5">
              <v-list-item-title>Dr.Isabella Bowers</v-list-item-title>
              <v-list-item-subtitle
                >California Hospital Medical</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-list two-line subheader class="mt-n5">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Surgeon</v-list-item-title>
              <v-list-item-subtitle>spinal pain</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-list two-line subheader class="mt-n8">
          <v-list-item>
            <v-list-item-title class="cyan--text text--darken-1"
              >Date</v-list-item-title
            >
            <v-list-item-title class="cyan--text text--darken-1"
              >Time</v-list-item-title
            >
          </v-list-item>
          <v-list-item class="mt-n10">
            <v-list-item-title>26 Aug 2019</v-list-item-title>
            <v-list-item-title>12:45 AM</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-flex>
    <v-flex md8 class="lg5-custom">
           <v-card class="ma-5" shaped elevation="10" height="750px">
        <v-list>
          <v-list-item>
            <v-list-item-avatar
              size="10"
              color="cyan darken-1"
            ></v-list-item-avatar>
            <v-list-item-title class="ml-n2">Kognum</v-list-item-title>
            <v-list-item-subtitle>10 mg</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title class="cyan--text text--darken-1"
              >MON</v-list-item-title
            >
            <v-list-item-title class="cyan--text text--darken-1"
              >WED</v-list-item-title
            >
            <v-list-item-title class="cyan--text text--darken-1"
              >FRI</v-list-item-title
            >
            <v-list-item-title class="cyan--text text--darken-1"
              >SUN</v-list-item-title
            >
          </v-list-item>
          <v-list-item class="mt-n5">
            <v-list-item-subtitle
              >2 times in a day before food</v-list-item-subtitle
            >
          </v-list-item>
          <v-divider></v-divider>
        </v-list>
        <v-list two-line subheader>
          <v-list-item>
            <v-list-item-avatar size="35">
              <img src="img4.png" />
            </v-list-item-avatar>
            <v-list-item-content class="ml-n5">
              <v-list-item-title>Dr.Isabella Bowers</v-list-item-title>
              <v-list-item-subtitle
                >California Hospital Medical</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-list two-line subheader class="mt-n5">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Surgeon</v-list-item-title>
              <v-list-item-subtitle>spinal pain</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-list two-line subheader class="mt-n8">
          <v-list-item>
            <v-list-item-title class="cyan--text text--darken-1"
              >Date</v-list-item-title
            >
            <v-list-item-title class="cyan--text text--darken-1"
              >Time</v-list-item-title
            >
          </v-list-item>
          <v-list-item class="mt-n10">
            <v-list-item-title>26 Aug 2019</v-list-item-title>
            <v-list-item-title>12:45 AM</v-list-item-title>
     
          </v-list-item>
           <v-sparkline
    :value="value"
    :gradient="gradient"
    :smooth="radius || false"
    :padding="padding"
    :line-width="width"
    :stroke-linecap="lineCap"
    :gradient-direction="gradientDirection"
    :fill="fill"
    :type="type"
    :auto-line-width="autoLineWidth"
    auto-draw
  ></v-sparkline>
        </v-list>
        
      </v-card>
      
    </v-flex>

  </v-layout>
 
</template>
<script>
  const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]

  export default {
    data: () => ({
      width: 2,
      radius: 10,
      padding: 8,
      lineCap: 'round',
      gradient: gradients[5],
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      gradientDirection: 'top',
      gradients,
      fill: false,
      type: 'trend',
      autoLineWidth: false,
    }),
  }
</script>
