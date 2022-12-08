Vue.createApp({
  data() {
    // 方塊預設值
    return {
      perspective: 100,
      // x軸旋轉
      rotateX: 0,
      // y軸旋轉
      rotateY: 0,
      // z軸旋轉
      rotateZ: 0,
      color: "#8d81f3",
    };
  },
  methods: {
    // 重置按鈕
    resetBtn() {
      this.perspective = 100;
      // x軸旋轉
      this.rotateX = 0;
      // y軸旋轉
      this.rotateY = 0;
      // z軸旋轉
      this.rotateZ = 0;
      this.color = "#8d81f3";
    },
    async copyBtn() {
      let text = `transform:${this.box.transform}`;
      await navigator.clipboard.writeText(text);

      alert("已經複製樣式到剪貼版");
    },
  },
  computed: {
    box() {
      return {
        transform: `
            perspective(${this.perspective}px)
            rotateX(${this.rotateX}deg)
            rotateY(${this.rotateY}deg)
            rotateZ(${this.rotateZ}deg)
            `,
        backgroundColor: `${this.color}`,
      };
    },
  },
}).mount("#app");
