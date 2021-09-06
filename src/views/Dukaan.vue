<template>
  <div class="car">
    <v-layout>
      <v-row class="last2">
        <v-container class="last">
          <v-row>
            <v-col cols="12" md="2">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNTYiIGhlaWdodD0iNDQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxNTYgNDQiPgogICAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTY5LjcxMSAxMC44NXYyMS4xNTVjLjA1NC4zODItLjIxNi43MDktLjU5NC43NjNoLTIuNzUzYy0uMzc5LjA1NS0uNzAzLS4yMTgtLjc1Ny0uNlYzMC44NmMtMS4xMzMgMS40NzItMi44NjEgMi4zNDUtNS4yMzcgMi4zNDUtNC4zMiAwLTcuODMtMy43MDgtNy44My04LjU2IDAtNC44NTMgMy41NjQtOC41NiA3LjgzLTguNTYgMi4zMjIgMCA0LjA1Ljg3MiA1LjIzOCAyLjM0NHYtNy42MzNjLS4wNTUtLjM4Mi4yMTUtLjcxLjU5My0uNzY0aDIuNzU0Yy4zNzgtLjA1NC43MDIuMjE4Ljc1Ni42LjA1NC4xMDkuMDU0LjE2NCAwIC4yMTh6TTY1LjYwOCAyNC43YzAtMi41MDgtMS45OTgtNC40NzEtNC40MjgtNC40NzEtMi40ODQgMC00LjQyOCAyLjAxNy00LjQyOCA0LjQ3IDAgMi41MDkgMS45OTggNC40NzIgNC40MjggNC40NzIgMi40MyAwIDQuNDI4LTEuOTYzIDQuNDI4LTQuNDcxek04NC43NzcgMTYuNTc1Yy4zNzgtLjA1NS43MDIuMjE4Ljc1Ni42djE0LjgzYy4wNTQuMzgyLS4yMTYuNzA5LS41OTQuNzYzSDgyLjEzYy0uMzc4LjA1NS0uNzAyLS4yMTgtLjc1Ni0uNnYtMS4wOWMtLjkxOCAxLjM2My0yLjM3NiAyLjEyNy00LjM3NCAyLjEyNy0yLjk3IDAtNS4yMzgtMi4yOS01LjIzOC02LjI3di05LjU5N2MtLjA1NC0uMzgxLjIxNi0uNzA5LjU5NC0uNzYzaDIuODA4Yy4zNzgtLjA1NS43MDIuMjE4Ljc1Ni42djkuNDMzYzAgMS44NTMgMS4wOCAyLjcyNSAyLjUzOCAyLjcyNSAxLjYyIDAgMi45MTYtLjkyNyAyLjkxNi0zLjM4di04LjYxNWMtLjA1NC0uMzgxLjIxNi0uNzA5LjU5NC0uNzYzaDIuODA4ek0xMDEuNDA4IDMyLjgyM2gtMy4wMjRjLS4zNzggMC0uNzAyLS4xNjQtLjkxOC0uNDlsLTUuMjkxLTYuODd2Ni41NDJjLjA1My4zODItLjIxNi43MDktLjU5NC43NjNoLTIuODA4Yy0uMzc4LjA1NS0uNzAyLS4yMTgtLjc1Ni0uNlYxMC44NWMtLjA1NC0uMzgyLjIxNi0uNzA5LjU5NC0uNzYzaDIuODA3Yy4zNzgtLjA1NS43MDMuMjE4Ljc1Ni42djEzLjAzMWw0Ljk2OC02LjY1MmMuMjE2LS4zMjguNTQtLjQ5MS45MTgtLjQ5MWgzLjA3OGMuNjQ4IDAgLjg2NC40MzYuNDg2LjkyN2wtNS40IDcuMDg4IDUuNzI0IDcuMjUxYy4zMjQuNTQ2LjEwOC45ODItLjU0Ljk4MnpNMTA5Ljk0IDE2LjEzOWMzLjU2NCAwIDYuNTM0IDIuMTI2IDYuNTM0IDYuMzc5djkuNTQxYy4wNTQuMzgyLS4yMTYuNzEtLjU5NC43NjRIMTEzLjE4Yy0uMzc4LjA1NC0uNzAyLS4yMTgtLjc1Ni0uNlYzMS40MDVjLS45MTggMS4xNDUtMi4zMjIgMS44NTQtNC4zNzQgMS44NTQtMi44NjIgMC01LjQtMS42OS01LjQtNS4wNyAwLTMuMzgxIDIuNTM4LTUuMTI2IDUuNC01LjEyNiAxLjU2Ni0uMTA5IDMuMTMyLjQzNiA0LjM3NCAxLjQxOHYtMS43NDVjMC0xLjkwOC0uOTcyLTIuNzI2LTIuNDg0LTIuNzI2LTEuMTg4IDAtMi4xMDYuNDktMi4zNzYgMS4zNjMtLjE2Mi40MzYtLjMyNC43MDktLjgxLjcwOWgtMi41MzhjLS4zNzguMDU0LS43MDItLjIxOC0uNzU2LS42di0uMjE4Yy4zNzgtMy4yNzEgMy4xODYtNS4xMjUgNi40OC01LjEyNXptMi40ODQgMTEuOTk1YzAtMS4yNTQtMS4xMzQtMi4wMTgtMi45MTYtMi4wMThzLTIuNy44NzMtMi43IDIuMDE4YzAgMS4xNDUuODY0IDIuMDE3IDIuNyAyLjAxNyAxLjgzNiAwIDIuOTE2LS44MTggMi45MTYtMi4wMTd6TTEyNS42NTMgMTYuMTM5YzMuNTY0IDAgNi41MzQgMi4xMjYgNi41MzQgNi4zNzl2OS41NDFjLjA1NC4zODItLjIxNi43MS0uNTk0Ljc2NEgxMjguODkzYy0uMzc4LjA1NC0uNzAyLS4yMTgtLjc1Ni0uNlYzMS40MDVjLS45MTggMS4xNDUtMi4zMjIgMS44NTQtNC4zNzQgMS44NTQtMi44NjIgMC01LjQtMS42OS01LjQtNS4wNyAwLTMuMzgxIDIuNTM4LTUuMTI2IDUuNC01LjEyNiAxLjU2Ni0uMTA5IDMuMTMyLjQzNiA0LjM3NCAxLjQxOHYtMS43NDVjMC0xLjkwOC0uOTcyLTIuNzI2LTIuNDg0LTIuNzI2LTEuMTg4IDAtMi4xMDYuNDktMi4zNzYgMS4zNjMtLjE2Mi40MzYtLjMyNC43MDktLjgxLjcwOWgtMi41OTJjLS4zNzguMDU0LS43MDItLjIxOC0uNzU2LS42di0uMjE4Yy40MzItMy4yNzEgMy4yNC01LjEyNSA2LjUzNC01LjEyNXptMi40ODQgMTEuOTk1YzAtMS4yNTQtMS4xMzQtMi4wMTgtMi45MTYtMi4wMThzLTIuNy44NzMtMi43IDIuMDE4YzAgMS4xNDUuODY0IDIuMDE3IDIuNyAyLjAxNyAxLjgzNiAwIDIuOTE2LS44MTggMi45MTYtMi4wMTd6TTE0Mi44MjQgMTYuMTM5YzIuOTcgMCA1LjIzOCAyLjM0NCA1LjIzOCA2LjI3djkuNTk2Yy4wNTQuMzgyLS4yMTYuNzA5LS41OTQuNzYzaC0yLjgwOGMtLjM3OC4wNTUtLjcwMi0uMjE4LS43NTYtLjZ2LTkuNDMyYzAtMS44NTQtMS4wOC0yLjcyNi0yLjUzNy0yLjcyNi0xLjYyIDAtMi45MTYuOTI3LTIuOTE2IDMuMzh2OC42MTVjLjA1NC4zODItLjIxNi43MDktLjU5NC43NjNoLTIuODA4Yy0uMzc4LjA1NS0uNzAyLS4yMTgtLjc1Ni0uNnYtMTQuODNjLS4wNTQtLjM4MS4yMTYtLjcwOS41OTQtLjc2M2gyLjgwOGMuMzc4LS4wNTUuNzAyLjIxOC43NTYuNnYxLjAzNmMuODY0LTEuMzA5IDIuMzc2LTIuMDcyIDQuMzczLTIuMDcyeiIvPgogICAgPHBhdGggZmlsbD0iIzE0NkVCNCIgZD0iTTI5LjkxNSAxNi40MTFjLS4zMjQgNC41MjYtNC4yNjYgNy45MDYtOC43NDggNy41OC0zLjk5Ni0uMzI4LTcuMTgyLTMuNTQ1LTcuNTA2LTcuNTgtLjEwNy0uOTI3LjU5NS0xLjc0NCAxLjUxMi0xLjg1My45MTgtLjExIDEuNzI4LjYgMS44MzYgMS41MjZ2LjA1NWMuMjE2IDIuNjcxIDIuNTM4IDQuNjg5IDUuMTg0IDQuNDE2IDIuMzIyLS4yMTggNC4yMTItMi4wNzIgNC4zNzQtNC40MTYuMDU0LS45MjcuODY0LTEuNjM2IDEuNzgyLTEuNTI3Ljk3Mi4wNTUgMS42Mi44NzMgMS41NjYgMS44eiIvPgogICAgPHBhdGggZmlsbD0iIzE0NkVCNCIgZD0iTTIxLjc2MSAwQzkuNzc0IDAgMCA5Ljg2OSAwIDIyLjAyNyAwIDM0LjE4NiA5Ljc3NCA0NCAyMS43NjEgNDRjMTEuOTg4IDAgMjEuNzYxLTkuODY5IDIxLjc2MS0yMS45NzNDNDMuNTc2IDkuODcgMzMuODAyIDAgMjEuNzYyIDBjLjA1MyAwIC4wNTMgMCAwIDB6bTExLjY2NCAzMC4zMTVjMCAxLjc5OS0xLjQwNCAzLjIxNy0zLjE4NiAzLjIxN0gxMy4zMzhjLTEuNzgyIDAtMy4xODYtMS40NzItMy4xODYtMy4yMTd2LTE2LjYzYzAtMS43OTkgMS40NTgtMy4yMTcgMy4xODYtMy4yMTdoMTYuOWMxLjc4MyAwIDMuMTg3IDEuNDE4IDMuMTg3IDMuMjE3djE2LjYzeiIvPgogICAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE1Mi4wMDQgOC4xMjRjLTIuMjE0IDAtMy45NDIgMS44LTMuOTQyIDMuOTggMCAyLjE4MSAxLjc4MiAzLjk4IDMuOTk2IDMuOTggMi4xNiAwIDMuOTQyLTEuNzk5IDMuOTQyLTMuOTggMC0yLjE4LTEuNzgyLTMuOTgtMy45OTYtMy45OHptMCAuNjU0YzEuODM2IDAgMy4zNDggMS41MjcgMy4zNDggMy4zOCAwIDEuODU0LTEuNTEyIDMuMzgxLTMuMzQ4IDMuMzgxLTEuODM2IDAtMy4zNDgtMS41MjctMy4zNDgtMy4zOCAwLTEuOTA5IDEuNTEyLTMuMzggMy4zNDgtMy4zOHptLTEuMjQyIDEuNTI3djMuNzA3aC41OTRWMTIuNjVoLjgxbC44NjQgMS4zNjNoLjU5NGwtLjg2NC0xLjQxNy4yNy0uMDU1Yy4xNjItLjA1NC4zMjQtLjE2My40MzItLjI3Mi4xMDgtLjExLjE2Mi0uMjE4LjIxNi0uMzgyLjA1NC0uMTEuMDU0LS4yNzMuMDU0LS4zODIgMC0uMTA5IDAtLjI3Mi0uMDU0LS4zODEtLjA1NC0uMTY0LS4xMDgtLjI3My0uMjE2LS4zODItLjEwOC0uMTA5LS4yNy0uMjE4LS40MzItLjI3My0uMjE2LS4xMDktLjQ4Ni0uMTYzLS43MDItLjEwOWgtMS41NjZ2LS4wNTR6bS42NDguNDlIMTUyLjU0NGMuMTA4IDAgLjIxNi4wNTUuMjcuMTEuMTA4LjA1NC4xNjIuMTA5LjIxNi4xNjMuMDU0LjExLjEwOC4yMTguMTA4LjMyNyAwIC4xMSAwIC4yMTgtLjEwOC4zMjctLjA1NC4xMS0uMTA4LjE2NC0uMjE2LjIxOWwtLjMyNC4xMDljLS4xMDggMC0uMjE2LjA1NC0uMzI0IDBoLS44MWwuMDU0LTEuMjU1eiIvPgo8L3N2Zz4K"
                alt="dukaan"
              />
            </v-col>
            <v-col cols="12" md="2"> <span><u>Sell online</u></span></v-col>
            <v-col cols="12" md="1"> <span><u>Pricing</u></span></v-col>
            <v-col cols="12" md="4"></v-col>
            <v-col cols="12" md="1">
              <span><u>Login</u></span>
            </v-col>
            <v-col cols="12" md="2">
              <v-btn style="background-color:blue" height="50px"
                >Get Started
                </v-btn
              >
            </v-col>
          </v-row>
        </v-container>
      </v-row>
    </v-layout>
    
      <!-- <v-layout>
          <v-container>
            <v-row>
              <v-col cols="12" md="2">
             <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNTYiIGhlaWdodD0iNDQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxNTYgNDQiPgogICAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTY5LjcxMSAxMC44NXYyMS4xNTVjLjA1NC4zODItLjIxNi43MDktLjU5NC43NjNoLTIuNzUzYy0uMzc5LjA1NS0uNzAzLS4yMTgtLjc1Ny0uNlYzMC44NmMtMS4xMzMgMS40NzItMi44NjEgMi4zNDUtNS4yMzcgMi4zNDUtNC4zMiAwLTcuODMtMy43MDgtNy44My04LjU2IDAtNC44NTMgMy41NjQtOC41NiA3LjgzLTguNTYgMi4zMjIgMCA0LjA1Ljg3MiA1LjIzOCAyLjM0NHYtNy42MzNjLS4wNTUtLjM4Mi4yMTUtLjcxLjU5My0uNzY0aDIuNzU0Yy4zNzgtLjA1NC43MDIuMjE4Ljc1Ni42LjA1NC4xMDkuMDU0LjE2NCAwIC4yMTh6TTY1LjYwOCAyNC43YzAtMi41MDgtMS45OTgtNC40NzEtNC40MjgtNC40NzEtMi40ODQgMC00LjQyOCAyLjAxNy00LjQyOCA0LjQ3IDAgMi41MDkgMS45OTggNC40NzIgNC40MjggNC40NzIgMi40MyAwIDQuNDI4LTEuOTYzIDQuNDI4LTQuNDcxek04NC43NzcgMTYuNTc1Yy4zNzgtLjA1NS43MDIuMjE4Ljc1Ni42djE0LjgzYy4wNTQuMzgyLS4yMTYuNzA5LS41OTQuNzYzSDgyLjEzYy0uMzc4LjA1NS0uNzAyLS4yMTgtLjc1Ni0uNnYtMS4wOWMtLjkxOCAxLjM2My0yLjM3NiAyLjEyNy00LjM3NCAyLjEyNy0yLjk3IDAtNS4yMzgtMi4yOS01LjIzOC02LjI3di05LjU5N2MtLjA1NC0uMzgxLjIxNi0uNzA5LjU5NC0uNzYzaDIuODA4Yy4zNzgtLjA1NS43MDIuMjE4Ljc1Ni42djkuNDMzYzAgMS44NTMgMS4wOCAyLjcyNSAyLjUzOCAyLjcyNSAxLjYyIDAgMi45MTYtLjkyNyAyLjkxNi0zLjM4di04LjYxNWMtLjA1NC0uMzgxLjIxNi0uNzA5LjU5NC0uNzYzaDIuODA4ek0xMDEuNDA4IDMyLjgyM2gtMy4wMjRjLS4zNzggMC0uNzAyLS4xNjQtLjkxOC0uNDlsLTUuMjkxLTYuODd2Ni41NDJjLjA1My4zODItLjIxNi43MDktLjU5NC43NjNoLTIuODA4Yy0uMzc4LjA1NS0uNzAyLS4yMTgtLjc1Ni0uNlYxMC44NWMtLjA1NC0uMzgyLjIxNi0uNzA5LjU5NC0uNzYzaDIuODA3Yy4zNzgtLjA1NS43MDMuMjE4Ljc1Ni42djEzLjAzMWw0Ljk2OC02LjY1MmMuMjE2LS4zMjguNTQtLjQ5MS45MTgtLjQ5MWgzLjA3OGMuNjQ4IDAgLjg2NC40MzYuNDg2LjkyN2wtNS40IDcuMDg4IDUuNzI0IDcuMjUxYy4zMjQuNTQ2LjEwOC45ODItLjU0Ljk4MnpNMTA5Ljk0IDE2LjEzOWMzLjU2NCAwIDYuNTM0IDIuMTI2IDYuNTM0IDYuMzc5djkuNTQxYy4wNTQuMzgyLS4yMTYuNzEtLjU5NC43NjRIMTEzLjE4Yy0uMzc4LjA1NC0uNzAyLS4yMTgtLjc1Ni0uNlYzMS40MDVjLS45MTggMS4xNDUtMi4zMjIgMS44NTQtNC4zNzQgMS44NTQtMi44NjIgMC01LjQtMS42OS01LjQtNS4wNyAwLTMuMzgxIDIuNTM4LTUuMTI2IDUuNC01LjEyNiAxLjU2Ni0uMTA5IDMuMTMyLjQzNiA0LjM3NCAxLjQxOHYtMS43NDVjMC0xLjkwOC0uOTcyLTIuNzI2LTIuNDg0LTIuNzI2LTEuMTg4IDAtMi4xMDYuNDktMi4zNzYgMS4zNjMtLjE2Mi40MzYtLjMyNC43MDktLjgxLjcwOWgtMi41MzhjLS4zNzguMDU0LS43MDItLjIxOC0uNzU2LS42di0uMjE4Yy4zNzgtMy4yNzEgMy4xODYtNS4xMjUgNi40OC01LjEyNXptMi40ODQgMTEuOTk1YzAtMS4yNTQtMS4xMzQtMi4wMTgtMi45MTYtMi4wMThzLTIuNy44NzMtMi43IDIuMDE4YzAgMS4xNDUuODY0IDIuMDE3IDIuNyAyLjAxNyAxLjgzNiAwIDIuOTE2LS44MTggMi45MTYtMi4wMTd6TTEyNS42NTMgMTYuMTM5YzMuNTY0IDAgNi41MzQgMi4xMjYgNi41MzQgNi4zNzl2OS41NDFjLjA1NC4zODItLjIxNi43MS0uNTk0Ljc2NEgxMjguODkzYy0uMzc4LjA1NC0uNzAyLS4yMTgtLjc1Ni0uNlYzMS40MDVjLS45MTggMS4xNDUtMi4zMjIgMS44NTQtNC4zNzQgMS44NTQtMi44NjIgMC01LjQtMS42OS01LjQtNS4wNyAwLTMuMzgxIDIuNTM4LTUuMTI2IDUuNC01LjEyNiAxLjU2Ni0uMTA5IDMuMTMyLjQzNiA0LjM3NCAxLjQxOHYtMS43NDVjMC0xLjkwOC0uOTcyLTIuNzI2LTIuNDg0LTIuNzI2LTEuMTg4IDAtMi4xMDYuNDktMi4zNzYgMS4zNjMtLjE2Mi40MzYtLjMyNC43MDktLjgxLjcwOWgtMi41OTJjLS4zNzguMDU0LS43MDItLjIxOC0uNzU2LS42di0uMjE4Yy40MzItMy4yNzEgMy4yNC01LjEyNSA2LjUzNC01LjEyNXptMi40ODQgMTEuOTk1YzAtMS4yNTQtMS4xMzQtMi4wMTgtMi45MTYtMi4wMThzLTIuNy44NzMtMi43IDIuMDE4YzAgMS4xNDUuODY0IDIuMDE3IDIuNyAyLjAxNyAxLjgzNiAwIDIuOTE2LS44MTggMi45MTYtMi4wMTd6TTE0Mi44MjQgMTYuMTM5YzIuOTcgMCA1LjIzOCAyLjM0NCA1LjIzOCA2LjI3djkuNTk2Yy4wNTQuMzgyLS4yMTYuNzA5LS41OTQuNzYzaC0yLjgwOGMtLjM3OC4wNTUtLjcwMi0uMjE4LS43NTYtLjZ2LTkuNDMyYzAtMS44NTQtMS4wOC0yLjcyNi0yLjUzNy0yLjcyNi0xLjYyIDAtMi45MTYuOTI3LTIuOTE2IDMuMzh2OC42MTVjLjA1NC4zODItLjIxNi43MDktLjU5NC43NjNoLTIuODA4Yy0uMzc4LjA1NS0uNzAyLS4yMTgtLjc1Ni0uNnYtMTQuODNjLS4wNTQtLjM4MS4yMTYtLjcwOS41OTQtLjc2M2gyLjgwOGMuMzc4LS4wNTUuNzAyLjIxOC43NTYuNnYxLjAzNmMuODY0LTEuMzA5IDIuMzc2LTIuMDcyIDQuMzczLTIuMDcyeiIvPgogICAgPHBhdGggZmlsbD0iIzE0NkVCNCIgZD0iTTI5LjkxNSAxNi40MTFjLS4zMjQgNC41MjYtNC4yNjYgNy45MDYtOC43NDggNy41OC0zLjk5Ni0uMzI4LTcuMTgyLTMuNTQ1LTcuNTA2LTcuNTgtLjEwNy0uOTI3LjU5NS0xLjc0NCAxLjUxMi0xLjg1My45MTgtLjExIDEuNzI4LjYgMS44MzYgMS41MjZ2LjA1NWMuMjE2IDIuNjcxIDIuNTM4IDQuNjg5IDUuMTg0IDQuNDE2IDIuMzIyLS4yMTggNC4yMTItMi4wNzIgNC4zNzQtNC40MTYuMDU0LS45MjcuODY0LTEuNjM2IDEuNzgyLTEuNTI3Ljk3Mi4wNTUgMS42Mi44NzMgMS41NjYgMS44eiIvPgogICAgPHBhdGggZmlsbD0iIzE0NkVCNCIgZD0iTTIxLjc2MSAwQzkuNzc0IDAgMCA5Ljg2OSAwIDIyLjAyNyAwIDM0LjE4NiA5Ljc3NCA0NCAyMS43NjEgNDRjMTEuOTg4IDAgMjEuNzYxLTkuODY5IDIxLjc2MS0yMS45NzNDNDMuNTc2IDkuODcgMzMuODAyIDAgMjEuNzYyIDBjLjA1MyAwIC4wNTMgMCAwIDB6bTExLjY2NCAzMC4zMTVjMCAxLjc5OS0xLjQwNCAzLjIxNy0zLjE4NiAzLjIxN0gxMy4zMzhjLTEuNzgyIDAtMy4xODYtMS40NzItMy4xODYtMy4yMTd2LTE2LjYzYzAtMS43OTkgMS40NTgtMy4yMTcgMy4xODYtMy4yMTdoMTYuOWMxLjc4MyAwIDMuMTg3IDEuNDE4IDMuMTg3IDMuMjE3djE2LjYzeiIvPgogICAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE1Mi4wMDQgOC4xMjRjLTIuMjE0IDAtMy45NDIgMS44LTMuOTQyIDMuOTggMCAyLjE4MSAxLjc4MiAzLjk4IDMuOTk2IDMuOTggMi4xNiAwIDMuOTQyLTEuNzk5IDMuOTQyLTMuOTggMC0yLjE4LTEuNzgyLTMuOTgtMy45OTYtMy45OHptMCAuNjU0YzEuODM2IDAgMy4zNDggMS41MjcgMy4zNDggMy4zOCAwIDEuODU0LTEuNTEyIDMuMzgxLTMuMzQ4IDMuMzgxLTEuODM2IDAtMy4zNDgtMS41MjctMy4zNDgtMy4zOCAwLTEuOTA5IDEuNTEyLTMuMzggMy4zNDgtMy4zOHptLTEuMjQyIDEuNTI3djMuNzA3aC41OTRWMTIuNjVoLjgxbC44NjQgMS4zNjNoLjU5NGwtLjg2NC0xLjQxNy4yNy0uMDU1Yy4xNjItLjA1NC4zMjQtLjE2My40MzItLjI3Mi4xMDgtLjExLjE2Mi0uMjE4LjIxNi0uMzgyLjA1NC0uMTEuMDU0LS4yNzMuMDU0LS4zODIgMC0uMTA5IDAtLjI3Mi0uMDU0LS4zODEtLjA1NC0uMTY0LS4xMDgtLjI3My0uMjE2LS4zODItLjEwOC0uMTA5LS4yNy0uMjE4LS40MzItLjI3My0uMjE2LS4xMDktLjQ4Ni0uMTYzLS43MDItLjEwOWgtMS41NjZ2LS4wNTR6bS42NDguNDlIMTUyLjU0NGMuMTA4IDAgLjIxNi4wNTUuMjcuMTEuMTA4LjA1NC4xNjIuMTA5LjIxNi4xNjMuMDU0LjExLjEwOC4yMTguMTA4LjMyNyAwIC4xMSAwIC4yMTgtLjEwOC4zMjctLjA1NC4xMS0uMTA4LjE2NC0uMjE2LjIxOWwtLjMyNC4xMDljLS4xMDggMC0uMjE2LjA1NC0uMzI0IDBoLS44MWwuMDU0LTEuMjU1eiIvPgo8L3N2Zz4K"
                alt="dukaan"
              />
              </v-col>
              <v-col cols="12" md="2">
              <span>Sell online</span>
              </v-col>
              <v-col cols="12" md="2">
               <span>Pricing</span>
              </v-col>
              <v-col cols="12" md="3"></v-col>
              <v-col cols="12" md="1">
             <span>Login</span>
              </v-col>
              <v-col cols="12" md="2">
             <v-btn style="background-color:blue" height="50px">Get Started</v-btn>
              </v-col>
              </v-row>
            </v-container>
        </v-layout> -->
    <v-layout>
      <v-row>
        <v-container class="last4">
          <v-row class="last5">
            <v-col cols="12" md="6">
              <div class="front">
                <h1>Start selling online.</h1>
                <p>
                  Dukaan is the easiest way to start, run and grow your online
                  business.
                </p>
                <v-btn style="background-color:blue" height="50px"
                  >Get started</v-btn
                >
                <p class="vehicle">
                  Also available on
                  <img src="../assets/ios logo.png" alt="ios" height="20px" />
                  <img
                    src="../assets/andorid logo.png"
                    alt="android"
                    height="20px"
                  />
                
                </p>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <img
                src="../assets/laptop.jpeg"
                alt="girl with laptop"
                height="500px"
                width="550px"
              />

            </v-col>
          </v-row>
        </v-container>
      </v-row>
    </v-layout>
    <v-layout>
      <v-row>
        <v-container class="zone">
          <v-col cols="12" md="12">
            <h4 class="d-flex justify-center">
              Art or apparel, cakes or cookies... create online stores easily
              with Dukaan. Start your dream business, today.
            </h4>
          </v-col>
        </v-container>
      </v-row>
    </v-layout>
    <v-layout>
      <v-container class="boom">
        <v-row>
          <v-col cols="12" md="12">
            <h2>Your dream business just three steps away!</h2>
          </v-col>
        </v-row>
      </v-container>
    </v-layout>
    <v-layout>
      <v-container>
        <v-row>
          <v-col cols="12" md="6"
            ><img src="https://mydukaan.io/images/create-store.svg" />
          </v-col>
          <v-col cols="12" md="6">
            <h3>STEP 1</h3>
            <h2>Name your store</h2>
            <p class="grenade">
              The nights you’ve lost, the fights you’ve fought... to find the
              perfect name.
            </p>
            <p class="grenade">Now is the time to make it happen.</p>
            <p class="grenade">
              Name your store, choose a category and say a prayer.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-layout>
    <v-layout>
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <h3 class="o">STEP 2</h3>
            <h2>Add your products</h2>
            <p class="grenade">
              Bakery or boutique, art or apparel...now it’s time to sell.
            </p>
            <p class="grenade">Let the world know what you have to offer.</p>
            <p class="grenade">
              Add your products, set the price and wish you good luck!
            </p>
          </v-col>
          <v-col cols="12" md="6">
            <img src="https://mydukaan.io/images/product-listing.svg" />
          </v-col>
        </v-row>
      </v-container>
    </v-layout>
    <v-layout>
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <img src="https://mydukaan.io/images/start-selling.svg" />
          </v-col>
          <v-col cols="12" md="6">
            <h3 class="p">STEP 3</h3>
            <h2>Start selling</h2>
            <p class="grenade">The moment of truth. The leap of faith.</p>
            <p class="grenade">
              This is where it all begins. Your store is ready for the world.
            </p>
            <p class="grenade">Start sharing and taking orders. Kaching!</p>
          </v-col>
        </v-row>
      </v-container>
    </v-layout>
    <v-layout>
      <v-container class="first">
        <v-row>
          <v-col cols="12" md="12">
            <h2 class="back">The easiest way to sell anything online.</h2>
            <p class="second">
              Start your brand new eCommerce store and impress your customers,
              with Dukaan!
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-layout>
    <v-layout>
      <v-container>
        <v-row>
          <v-col cols="12" md="3">
            <img
              src="https://mydukaan.io/_next/static/images/art-banner-bf9cd9965131c8b3854265d50f702f29.jpg"
              height="300px"
              width="250px"
            />
          </v-col>
          <v-col cols="12" md="3">
            <img
              src="https://mydukaan.io/_next/static/images/electronic-banner-8487bdb249920924102c06bd5979149e.jpg"
              height="300px"
              width="250px"
            />
          </v-col>
          <v-col cols="12" md="3">
            <img
              src="https://mydukaan.io/_next/static/images/furniture-banner-68e41522bbdb849f7fad82e0b16c8eb7.jpg"
              height="300px"
              width="250px"
            />
          </v-col>
          <v-col cols="12" md="3">
            <img
              src="https://mydukaan.io/_next/static/images/photo-banner-a2353fdd50c50355e7452a66221212ae.jpg"
              height="300px"
              width="250px"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-layout>
    <v-layout>
      <v-container class="sixth">
        <v-row>
          <v-col cols="12" md="12">
            <h2 class="header">E-commerce, made (incredibly) easy</h2>
          </v-col>
        </v-row>
      </v-container>
    </v-layout>
    <v-layout>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI1MiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDYwIDUyIj4KICAgIDxwYXRoIGZpbGw9IiNEQ0U5RjQiIGQ9Ik0xLjc2NiA2LjgxNWMwLTIuNzg4IDIuMjU3LTUuMDQ4IDUuMDQyLTUuMDQ4aDQ2LjM4NmMyLjc4NSAwIDUuMDQyIDIuMjYgNS4wNDIgNS4wNDh2MzguMzdjMCAyLjc4Ny0yLjI1NyA1LjA0OC01LjA0MiA1LjA0OEg2LjgwOGMtMi43ODUgMC01LjA0Mi0yLjI2LTUuMDQyLTUuMDQ5VjYuODE1eiIvPgogICAgPHBhdGggZmlsbD0iIzE0NkVCNCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMCA2LjgxNkMwIDMuMDUgMy4wNDcgMCA2LjgwNyAwaDQ2LjM4NkM1Ni45NTMgMCA2MCAzLjA1MSA2MCA2LjgxNnYzOC4zNjhDNjAgNDguOTUgNTYuOTUzIDUyIDUzLjE5MyA1Mkg2LjgwN0MzLjA0NyA1MiAwIDQ4Ljk0OSAwIDQ1LjE4NFY2LjgxNnptNi44MDctMy4yODJjLTEuODEgMC0zLjI3OCAxLjQ3LTMuMjc4IDMuMjgydjM4LjM2OWMwIDEuODEyIDEuNDY4IDMuMjgxIDMuMjc4IDMuMjgxaDQ2LjM4NmMxLjgxIDAgMy4yNzgtMS40NyAzLjI3OC0zLjI4MlY2LjgxNmMwLTEuODEzLTEuNDY4LTMuMjgyLTMuMjc4LTMuMjgySDYuODA3eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8cGF0aCBmaWxsPSIjMTQ2RUI0IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOC42NjUgMTUuNjYzYy41MDYtLjUwNiAxLjI2Ny0uNjU3IDEuOTI3LS4zODJsMjAuMTY4IDguNDE0Yy42NzguMjgyIDEuMTEuOTU2IDEuMDg1IDEuNjktLjAyNS43MzUtLjUwMSAxLjM3Ny0xLjE5NiAxLjYxNGwtNy45NiAyLjcwNy0yLjcwMyA3Ljk2OWMtLjIzNi42OTYtLjg3NyAxLjE3My0xLjYxMSAxLjE5OC0uNzM0LjAyNS0xLjQwNi0uNDA4LTEuNjg4LTEuMDg3bC04LjQwMy0yMC4xOTRjLS4yNzUtLjY2LS4xMjQtMS40MjMuMzgxLTEuOTI5em00LjUyNSA0LjUzbDQuOTU3IDExLjkxNSAxLjQ4LTQuMzY0Yy4xNzctLjUyLjU4NS0uOTI4IDEuMTA0LTEuMTA0bDQuMzU4LTEuNDgzLTExLjg5OS00Ljk2M3oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K"
              alt="Design tools"
            />
            <h5 class="third">Design tools</h5>
            <p class="fourth">
              Make your store popular by designing amazing marketing materials
              from easy templates right within Dukaan.
            </p>
          </v-col>
          <v-col cols="12" md="4">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDYwIDYwIj4KICAgIDxwYXRoIGZpbGw9IiNEQ0U5RjQiIGQ9Ik0zMCA1OC4yMzVjMTUuNTk1IDAgMjguMjM2LTEyLjY0MSAyOC4yMzYtMjguMjM1UzQ1LjU5NSAxLjc2NSAzMC4wMDEgMS43NjUgMS43NjYgMTQuNDA2IDEuNzY2IDMwIDE0LjQwNyA1OC4yMzUgMzAgNTguMjM1eiIvPgogICAgPHBhdGggZmlsbD0iIzE0NkVCNCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAgMy41M0MxNS4zOCAzLjUzIDMuNTMgMTUuMzggMy41MyAzMFMxNS4zOCA1Ni40NyAzMCA1Ni40NyA1Ni40NyA0NC42MiA1Ni40NyAzMCA0NC42MiAzLjUzIDMwIDMuNTN6TTAgMzBDMCAxMy40MzEgMTMuNDMxIDAgMzAgMGMxNi41NjkgMCAzMCAxMy40MzEgMzAgMzAgMCAxNi41NjktMTMuNDMxIDMwLTMwIDMwQzEzLjQzMSA2MCAwIDQ2LjU2OSAwIDMweiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8cGF0aCBmaWxsPSIjMTQ2RUI0IiBkPSJNMjYuMDEgMTUuMTI2Yy42NDIgMCAxLjE2Mi41MiAxLjE2MiAxLjE2MnY3LjI2M2MwIDIuNjQ1LTEuODcgNC44Ni00LjM1OCA1LjM5NnYxNC43NjVjMCAuNjQyLS41MiAxLjE2Mi0xLjE2MiAxLjE2Mi0uNjQxIDAtMS4xNjItLjUyLTEuMTYyLTEuMTYyVjI4Ljk0N2MtMi40ODctLjUzNS00LjM1Ny0yLjc1MS00LjM1Ny01LjM5NnYtNy4yNjNjMC0uNjQyLjUyLTEuMTYyIDEuMTYyLTEuMTYyLjY0MiAwIDEuMTYyLjUyIDEuMTYyIDEuMTYydjcuMjYzYzAgMS43NjIgMS40MzMgMy4xOTUgMy4xOTUgMy4xOTUgMS43NjIgMCAzLjE5Ni0xLjQzMyAzLjE5Ni0zLjE5NXYtNy4yNjNjMC0uNjQyLjUyLTEuMTYyIDEuMTYyLTEuMTYyem0xMS4zODggMGMxLjU0OCAwIDMuMDA0IDEuMSA0LjEgMy4xLjg5IDEuNjIgMS40MiAzLjYxIDEuNDIgNS4zMjUgMCAyLjY0NS0xLjg3IDQuODYtNC4zNTggNS4zOTZ2MTQuNzY1YzAgLjY0Mi0uNTIgMS4xNjItMS4xNjIgMS4xNjItLjY0MiAwLTEuMTYyLS41Mi0xLjE2Mi0xLjE2MlYyOC45NDdjLTIuNDg3LS41MzUtNC4zNTctMi43NTEtNC4zNTctNS4zOTYgMC0xLjcxNC41My0zLjcwNSAxLjQyLTUuMzI1IDEuMDk2LTIgMi41NTItMy4xIDQuMS0zLjF6bTAgMi4zMjRjLS42MzEgMC0xLjQyMi43MjYtMi4wNjIgMS44OTMtLjcgMS4yNzQtMS4xMzMgMi44ODYtMS4xMzMgNC4yMDggMCAxLjc2MiAxLjQzMyAzLjE5NSAzLjE5NSAzLjE5NSAxLjc2MiAwIDMuMTk2LTEuNDMzIDMuMTk2LTMuMTk1IDAtMS4zMjItLjQzNC0yLjkzNC0xLjEzMy00LjIwOC0uNjQxLTEuMTY4LTEuNDMxLTEuODkzLTIuMDYzLTEuODkzem0tMTUuNzQ2LTIuMzI0Yy42NDIgMCAxLjE2Mi41MiAxLjE2MiAxLjE2MnY3LjA4OGMwIC42NDItLjUyIDEuMTYyLTEuMTYyIDEuMTYyLS42NDEgMC0xLjE2Mi0uNTItMS4xNjItMS4xNjJ2LTcuMDg4YzAtLjY0Mi41Mi0xLjE2MiAxLjE2Mi0xLjE2MnoiLz4KICAgIDxwYXRoIGZpbGw9IiMxNDZFQjQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTE3LjI5NyAxNS4zNzhjLS41MDMgMC0uOTEuNDA4LS45MS45MXY3LjI2M2MwIDIuNTIzIDEuNzg1IDQuNjM5IDQuMTU5IDUuMTVsLjE5OS4wNDJ2MTQuOTY5YzAgLjUwMy40MDcuOTEuOTEuOTEuNTAyIDAgLjkxLS40MDcuOTEtLjkxVjI4Ljc0M2wuMTk4LS4wNDJjMi4zNzQtLjUxMSA0LjE2LTIuNjI3IDQuMTYtNS4xNXYtNy4yNjNjMC0uNTAyLS40MDgtLjkxLS45MS0uOTEtLjUwMyAwLS45MS40MDgtLjkxLjkxdjcuMjYzYzAgMS45MDEtMS41NDcgMy40NDgtMy40NDkgMy40NDgtMS45IDAtMy40NDctMS41NDctMy40NDctMy40NDh2LTcuMjYzYzAtLjUwMi0uNDA4LS45MS0uOTEtLjkxem0tMS40MTQuOTFjMC0uNzguNjMzLTEuNDE0IDEuNDE0LTEuNDE0Ljc4MSAwIDEuNDE0LjYzMyAxLjQxNCAxLjQxNHY3LjI2M2MwIDEuNjIzIDEuMzIgMi45NDMgMi45NDQgMi45NDMgMS42MjIgMCAyLjk0My0xLjMyIDIuOTQzLTIuOTQzdi03LjI2M2MwLS43OC42MzMtMS40MTQgMS40MTQtMS40MTQuNzgxIDAgMS40MTQuNjMzIDEuNDE0IDEuNDE0djcuMjYzYzAgMi42OTUtMS44NTYgNC45NjQtNC4zNTcgNS41OTZ2MTQuNTY1YzAgLjc4MS0uNjMzIDEuNDE0LTEuNDE1IDEuNDE0LS43OCAwLTEuNDE0LS42MzMtMS40MTQtMS40MTRWMjkuMTQ3Yy0yLjUtLjYzMi00LjM1Ny0yLjktNC4zNTctNS41OTZ2LTcuMjYzem01Ljc3MS0uOTFjLS41MDIgMC0uOTEuNDA4LS45MS45MXY3LjA4OGMwIC41MDMuNDA4LjkxLjkxLjkxLjUwMyAwIC45MS0uNDA3LjkxLS45MXYtNy4wODhjMC0uNTAyLS40MDctLjkxLS45MS0uOTF6bS0xLjQxNC45MWMwLS43OC42MzQtMS40MTQgMS40MTUtMS40MTQuNzggMCAxLjQxNC42MzMgMS40MTQgMS40MTR2Ny4wODhjMCAuNzgxLS42MzMgMS40MTUtMS40MTUgMS40MTUtLjc4IDAtMS40MTQtLjYzNC0xLjQxNC0xLjQxNXYtNy4wODh6bTE3LjE2LS45MWMtMS40MTUgMC0yLjgwMyAxLjAwOS0zLjg3OSAyLjk2OS0uODcgMS41ODYtMS4zODggMy41MzUtMS4zODggNS4yMDQgMCAyLjUyMyAxLjc4NCA0LjYzOSA0LjE1OCA1LjE1bC4yLjA0MnYxNC45NjljMCAuNTAzLjQwNy45MS45MS45MS41MDIgMCAuOTEtLjQwNy45MS0uOTFWMjguNzQzbC4xOTgtLjA0MmMyLjM3NC0uNTExIDQuMTU5LTIuNjI3IDQuMTU5LTUuMTUgMC0xLjY2OS0uNTE4LTMuNjE4LTEuMzg5LTUuMjA0LTEuMDc1LTEuOTYtMi40NjMtMi45NjktMy44NzktMi45Njl6bS00LjMyIDIuNzI3YzEuMTE3LTIuMDM4IDIuNjQxLTMuMjMxIDQuMzItMy4yMzEgMS42OCAwIDMuMjA0IDEuMTkzIDQuMzIxIDMuMjMuOTA4IDEuNjU1IDEuNDUxIDMuNjg3IDEuNDUxIDUuNDQ3IDAgMi42OTUtMS44NTcgNC45NjQtNC4zNTcgNS41OTZ2MTQuNTY1YzAgLjc4MS0uNjM0IDEuNDE0LTEuNDE1IDEuNDE0LS43OCAwLTEuNDE0LS42MzMtMS40MTQtMS40MTRWMjkuMTQ3Yy0yLjUtLjYzMi00LjM1Ny0yLjktNC4zNTctNS41OTYgMC0xLjc2LjU0My0zLjc5MiAxLjQ1LTUuNDQ2em0zLjEyMi0uMzMyYy4zNzYtLjM0NS43OS0uNTc1IDEuMTk4LS41NzUuNDA4IDAgLjgyMy4yMyAxLjE5OS41NzUuMzgyLjM1Ljc1NS44NDggMS4wODUgMS40NS43MTcgMS4zMDcgMS4xNjQgMi45NiAxLjE2NCA0LjMyOCAwIDEuOTAxLTEuNTQ2IDMuNDQ4LTMuNDQ4IDMuNDQ4LTEuOSAwLTMuNDQ3LTEuNTQ3LTMuNDQ3LTMuNDQ4IDAtMS4zNjguNDQ3LTMuMDIxIDEuMTY0LTQuMzI5LjMzLS42LjcwMy0xLjA5OCAxLjA4NS0xLjQ0OXptLjM0MS4zNzJjLS4zMzEuMzA0LS42NzMuNzUzLS45ODQgMS4zMi0uNjggMS4yNC0xLjEwMiAyLjgxMS0xLjEwMiA0LjA4NiAwIDEuNjIzIDEuMzIgMi45NDMgMi45NDMgMi45NDNzMi45NDQtMS4zMiAyLjk0NC0yLjk0M2MwLTEuMjc1LS40MjItMi44NDYtMS4xMDItNC4wODYtLjMxMS0uNTY3LS42NTMtMS4wMTYtLjk4NC0xLjMyLS4zMzgtLjMxLS42MzQtLjQ0My0uODU4LS40NDMtLjIyMyAwLS41Mi4xMzMtLjg1Ny40NDN6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg=="
              alt="Restaurant dining<"
            />
            <h5 class="third">Restaurant dining</h5>
            <p class="fourth">
              With Dukaan, get more customers to your business, by running an
              easy to use table booking service, for your restaurant.
            </p>
          </v-col>
          <v-col cols="12" md="4">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDYwIDYwIj4KICAgIDxwYXRoIGZpbGw9IiNEQ0U5RjQiIGQ9Ik01NS45NzEgMjcuMThjMCA3LjMxLTYuMTggMTMuNDktMTMuNDkgMTMuNDloLTUuNjRjLTMuNTQgMC02LjY0IDMuMS02LjY0IDYuNjQgMCAxLjgxLjUyIDMuMjYgMS41NSA0LjI5LjQuNC44Ny44Ny44NyAxLjc1IDAgMS4zMi0xLjMgMi42Mi0yLjYyIDIuNjItNi44NyAwLTEzLjM4LTIuNzItMTguMzEtNy42Ni00Ljk1LTQuOTMtNy42Ni0xMS40NC03LjY2LTE4LjMxIDAtNi44NyAyLjcyLTEzLjM4IDcuNjYtMTguMzEgNC45My00Ljk1IDExLjQ0LTcuNjYgMTguMzEtNy42NiAxNC4zMyAwIDI1Ljk3IDEwLjM5IDI1Ljk3IDIzLjE1eiIvPgogICAgPHBhdGggZmlsbD0iIzE0NkVCNCIgZD0iTTMwIDBDMjIuMDcgMCAxNC41NiAzLjE0IDguODUgOC44NSAzLjE0IDE0LjU2IDAgMjIuMDcgMCAzMGMwIDcuOTMgMy4xNCAxNS40NCA4Ljg1IDIxLjE1QzE0LjU2IDU2Ljg2IDIyLjA3IDYwIDMwIDYwYzMuNiAwIDYuNjQtMy4yMyA2LjY0LTcuMDUgMC0xLjgxLS41Mi0zLjI2LTEuNTUtNC4yOS0uNC0uNC0uODctLjg3LS44Ny0xLjc1IDAtMS4zMiAxLjMtMi42MiAyLjYyLTIuNjJoNS42NEM1MS45OCA0NC4zIDYwIDM2LjI3IDYwIDI2Ljc4IDYwIDEyLjAxIDQ2LjU0IDAgMzAgMHptLjIgNDcuMzJjMCAxLjgxLjUyIDMuMjYgMS41NSA0LjI5LjQuNC44Ny44Ny44NyAxLjc1IDAgMS4zMi0xLjMgMi42Mi0yLjYyIDIuNjItNi44NyAwLTEzLjM4LTIuNzItMTguMzEtNy42NkM2Ljc0IDQzLjM4IDQuMDMgMzYuODcgNC4wMyAzMGMwLTYuODcgMi43Mi0xMy4zOCA3LjY2LTE4LjMxQzE2LjYyIDYuNzQgMjMuMTMgNC4wMyAzMCA0LjAzYzE0LjMzIDAgMjUuOTcgMTAuMzkgMjUuOTcgMjMuMTUgMCA3LjMxLTYuMTggMTMuNDktMTMuNDkgMTMuNDloLTUuNjRjLTMuNTQgMC02LjY0IDMuMS02LjY0IDYuNjV6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMTQ2RUI0IiBkPSJNMTMuNDkgMzEuMjljMi4xMTUgMCAzLjgzLTEuNzE1IDMuODMtMy44M3MtMS43MTUtMy44My0zLjgzLTMuODMtMy44MyAxLjcxNS0zLjgzIDMuODMgMS43MTUgMy44MyAzLjgzIDMuODN6TTI2LjE3MiAxNS4zOGMwIDIuMTEtMS43MiAzLjgzLTMuODMgMy44My0yLjExIDAtMy44My0xLjcxLTMuODMtMy44MyAwLTIuMSAxLjcxLTMuODMgMy44My0zLjgzIDIuMTEuMDEgMy44MyAxLjczIDMuODMgMy44M3pNMzcuNjUgMTkuMjFjMi4xMTYgMCAzLjgzLTEuNzE1IDMuODMtMy44M3MtMS43MTQtMy44My0zLjgzLTMuODNjLTIuMTE1IDAtMy44MyAxLjcxNS0zLjgzIDMuODNzMS43MTUgMy44MyAzLjgzIDMuODN6TTUwLjM0IDI3LjQ2YzAgMi4xMS0xLjcyIDMuODMtMy44MyAzLjgzLTIuMTEgMC0zLjgzLTEuNzEtMy44My0zLjgzIDAtMi4xIDEuNzEtMy44MyAzLjgzLTMuODMgMi4xLjAxIDMuODMgMS43MyAzLjgzIDMuODN6Ii8+Cjwvc3ZnPgo="
              alt="Unique themes"
            />
            <h5 class="third">Unique themes</h5>
            <p class="fourth">
              Make your store unique by choosing unique looks from a list of
              stunning themes and templates.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-layout>
    <v-layout>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDYwIDYwIj4KICAgIDxwYXRoIGZpbGw9IiNEQ0U5RjQiIGQ9Ik0zOS42OCAyMS4zMXYzMy40NWMwIC42NS0uNjIgMS4yNy0xLjI4IDEuMjdINS4yYy0uNjUgMC0xLjI3LS42Mi0xLjI3LTEuMjdWMjEuMzFjMC0uNjYuNjItMS4yOCAxLjI3LTEuMjhoMzMuMmMuNjYuMDEgMS4yOC42MyAxLjI4IDEuMjh6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRENFOUY0IiBkPSJNNTUuNjI5IDUuMjR2MzMuNDVjMCAuNjYtLjYyIDEuMjgtMS4yNyAxLjI4aC05LjQ5Yy0uNjYgMC0xLjI3LS42Mi0xLjI3LTEuMjhWMTcuODRjMC0xLjA2LS42OS0yLjItMi4xOS0yLjJoLTIwLjI2Yy0uNjUgMC0xLjI3LS42Mi0xLjI3LTEuMjhWNS4yNGMwLS42Ni42Mi0xLjI4IDEuMjctMS4yOGgzMy4yMWMuNjUgMCAxLjI3LjYyIDEuMjcgMS4yOHoiLz4KICAgIDxwYXRoIGZpbGw9IiMxNDZFQjQiIGQ9Ik01Ny4zOSAwSDE3LjcxYy0xLjE0IDAtMS43NS43OC0xLjc1IDIuMnYxMy44OEgyLjE4Qy43NyAxNi4wNyAwIDE2LjY5IDAgMTcuODRWNTcuOEMwIDU4Ljg1LjY4IDYwIDIuMTggNjBoMzkuNjhjMS4wNiAwIDIuMTgtMS4xNCAyLjE4LTIuMlY0My45M2gxMy43N2MxLjA1IDAgMi4xOS0uNjkgMi4xOS0yLjJWMi4yQzU5LjY3LjkgNTguNjMgMCA1Ny4zOSAwem0tMS43NiAzOC42OWMwIC42Ni0uNjIgMS4yOC0xLjI3IDEuMjhoLTkuNDljLS42NiAwLTEuMjctLjYyLTEuMjctMS4yOFYxNy44NGMwLTEuMDYtLjY5LTIuMi0yLjE5LTIuMkgyMS4xNWMtLjY1IDAtMS4yNy0uNjItMS4yNy0xLjI4VjUuMjRjMC0uNjYuNjItMS4yOCAxLjI3LTEuMjhoMzMuMjFjLjY1IDAgMS4yNy42MiAxLjI3IDEuMjh2MzMuNDV6TTMuOTMgMjEuMzFjMC0uNjYuNjItMS4yOCAxLjI3LTEuMjhoMzMuMmMuNjYgMCAxLjI4LjYyIDEuMjggMS4yOHYzMy40NWMwIC42NS0uNjIgMS4yNy0xLjI4IDEuMjdINS4yYy0uNjUgMC0xLjI3LS42Mi0xLjI3LTEuMjdWMjEuMzF6Ii8+Cjwvc3ZnPgo="
              alt="Easy pages"
            />
            <h5 class="third">Easy pages</h5>
            <p class="fourth">
              Grow your online store by publishing custom pages, using easy to
              use templates, readily available.
            </p>
          </v-col>
          <v-col cols="12" md="4">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDYwIDYwIj4KICAgIDxwYXRoIGZpbGw9IiNEQ0U5RjQiIGQ9Ik00OC40MDIgNTEuOTMzbC0xMi42MDUgNi4wNWgtNy4wNmwtMTAuMDgzLTIuMDE3LTguMDY4LTcuNTYzTDMuMDIzIDM4LjMybC41MDUtMTIuMSAyLjUyLTEwLjU4OSA3LjU2NC04LjU3MUwyNC4yIDMuNTI5aDExLjA5MmwxMC4wODQgMy41MyA4LjU3MiAxMC41ODggNC4wMzMgMTEuMDkyLTMuMDI1IDEyLjEwMS02LjU1NCAxMS4wOTN6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMTQ2RUI0IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMCAwYzE2LjU2OSAwIDMwIDEzLjQzMSAzMCAzMCAwIDE2LjU2OS0xMy40MzEgMzAtMzAgMzBDMTMuNDMxIDYwIDAgNDYuNTY5IDAgMzAgMCAxMy40MzEgMTMuNDMxIDAgMzAgMHptLTQuMDU5IDMuODM5QzEzLjgxNyA1LjcwNCA0LjQwNiAxNS43OTYgMy41ODcgMjguMjM1aDEzLjQyYy41MDYtOC44NTQgMy41NzQtMTcuMzY4IDguOTM0LTI0LjM5NnptLTguOTMzIDI3LjkyNkgzLjU4OEM0LjQwNyA0NC4yMjQgMTMuODQ3IDU0LjMyOSAyNiA1Ni4xN2MtNS4zMjQtNy4wNjctOC40NzYtMTUuNTI3LTguOTkyLTI0LjQwNXpNMzQgNTYuMTdjMTIuMTUyLTEuODQxIDIxLjU5My0xMS45NDYgMjIuNDEzLTI0LjQwNUg0Mi45OTJDNDIuNDc2IDQwLjY0MyAzOS4zMjQgNDkuMTAzIDM0IDU2LjE3em01LjQ1Ni0yNC40MDVjLS41NSA4LjczMS0zLjg3MiAxNy4wMjMtOS40NTYgMjMuNzc3LTUuNTg0LTYuNzU0LTguOTA1LTE1LjA0Ni05LjQ1Ni0yMy43NzdoMTguOTEyem0wLTMuNTNIMjAuNTQzYy41NDItOC43NiAzLjgwMi0xNy4xMjIgOS40NDEtMjMuNzk2IDUuNTkzIDYuNzU3IDguOTIgMTUuMDU2IDkuNDcyIDIzLjc5NnptMy41MzYgMGgxMy40MkM1NS41OTMgMTUuNzc2IDQ2LjE1MyA1LjY3MSAzNCAzLjgzYzUuMzI0IDcuMDY3IDguNDc2IDE1LjUyNyA4Ljk5MiAyNC40MDV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg=="
              alt="Custom domain"
            />
            <h5 class="third">Custom domain</h5>
            <p class="fourth">
              Make your store unique by getting your own custom domain name that
              is easy to remember.
            </p>
          </v-col>
          <v-col cols="12" md="4">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDYwIDYwIj4KICAgIDxwYXRoIGZpbGw9IiNEQ0U5RjQiIGQ9Ik0zMCA1OC4yMzVjMTUuNTk1IDAgMjguMjM2LTEyLjY0MSAyOC4yMzYtMjguMjM1UzQ1LjU5NSAxLjc2NSAzMC4wMDEgMS43NjUgMS43NjYgMTQuNDA2IDEuNzY2IDMwIDE0LjQwNyA1OC4yMzUgMzAgNTguMjM1eiIvPgogICAgPHBhdGggZmlsbD0iIzE0NkVCNCIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMzAgMy41M0MxNS4zOCAzLjUzIDMuNTMgMTUuMzggMy41MyAzMFMxNS4zOCA1Ni40NyAzMCA1Ni40NyA1Ni40NyA0NC42MiA1Ni40NyAzMCA0NC42MiAzLjUzIDMwIDMuNTN6TTAgMzBDMCAxMy40MzEgMTMuNDMxIDAgMzAgMGMxNi41NjkgMCAzMCAxMy40MzEgMzAgMzAgMCAxNi41NjktMTMuNDMxIDMwLTMwIDMwQzEzLjQzMSA2MCAwIDQ2LjU2OSAwIDMweiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8cGF0aCBmaWxsPSIjMTQ2RUI0IiBkPSJNMzcuNzMyIDI0LjE4MmgtMS43M2MtLjI3My0xLjE4NC0uNzI5LTIuMTg2LTEuNDU3LTMuMDk2aDMuMTg3Yy44MiAwIDEuNTQ4LS43MjggMS41NDgtMS41NDggMC0uODItLjcyOS0xLjU0OC0xLjU0OC0xLjU0OEgyMi4wN2MtLjgyIDAtMS41NDguNzI5LTEuNTQ4IDEuNTQ4IDAgLjgyLjcyOSAxLjU0OCAxLjU0OCAxLjU0OGg2LjI4M2MyLjAwMyAwIDMuNzMzIDEuMjc1IDQuMzcgMy4wOTZIMjIuMTYyYy0uODIgMC0xLjU0Ny43MjgtMS41NDcgMS41NDggMCAuODE5LjcyOCAxLjU0NyAxLjU0NyAxLjU0N2gxMC42NTNjLS42MzcgMS44MjEtMi4zNjcgMy4wOTYtNC4zNyAzLjA5NmgtNi4yODNjLS4xODIgMC0uMzY0IDAtLjYzNy4wOTEtLjM2NC4xODItLjcyOC40NTUtLjgyLjgyLS4xODIuMzY0LS4xODIuODE5IDAgMS4xODMuMDkyLjE4Mi4xODMuMzY0LjM2NS41NDdsMTIuNDc0IDEyLjQ3M2MuMjczLjI3My43MjguNDU2IDEuMDkyLjQ1Ni4zNjQgMCAuODItLjE4MiAxLjA5My0uNDU2LjYzNy0uNjM3LjYzNy0xLjYzOSAwLTIuMTg1bC05LjgzNC05Ljc0MmgyLjQ1OWMzLjczMyAwIDYuOTItMi42NCA3LjY0OC02LjI4M2gxLjczYy44MiAwIDEuNTQ4LS43MjggMS41NDgtMS41NDcgMC0uODItLjYzOC0xLjU0OC0xLjU0OC0xLjU0OHoiLz4KICAgIDxwYXRoIGZpbGw9IiMxNDZFQjQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIwLjQyMiAxOS41MzdjMC0uODc1Ljc3My0xLjY0OCAxLjY0OS0xLjY0OGgxNS42NmMuODc1IDAgMS42NDkuNzczIDEuNjQ5IDEuNjQ4IDAgLjg3Ni0uNzc0IDEuNjUtMS42NDkgMS42NWgtMi45OGMuNjUuODU5IDEuMDY5IDEuOCAxLjMzIDIuODkzaDEuNjVjLjk3IDAgMS42NDkuNzc4IDEuNjQ5IDEuNjQ5IDAgLjg3NS0uNzc0IDEuNjQ5LTEuNjQ5IDEuNjQ5aC0xLjY0OGMtLjc2OCAzLjY0Ni0zLjk3NiA2LjI4Mi03LjczIDYuMjgySDI2LjE0bDkuNjU3IDkuNTY3Yy42ODQuNTkuNjc1IDEuNjU4LjAwMiAyLjMzLS4yOTIuMjkzLS43NzMuNDg2LTEuMTYzLjQ4Ni0uMzkxIDAtLjg3Mi0uMTkzLTEuMTY0LS40ODVMMjAuOTk4IDMzLjA4NGMtLjE5NC0uMTk0LS4yOTEtLjM4OC0uMzgyLS41N2wtLjAwMS0uMDAyYy0uMTk1LS4zOS0uMTk3LS44NzQtLjAwNS0xLjI2NS4xMDctLjQwNC41MDUtLjY5Mi44Ny0uODc0bC4wMDYtLjAwMy4wMDYtLjAwMmMuMjktLjA5Ni40ODQtLjA5Ni42Ny0uMDk2aDYuMjgyYzEuOTEgMCAzLjU2Ni0xLjE4NSA0LjIyNi0yLjg5NEgyMi4xNjJjLS44NzUgMC0xLjY1LS43NzQtMS42NS0xLjY1IDAtLjg3NC43NzQtMS42NDggMS42NS0xLjY0OGgxMC40MTdjLS42Ni0xLjcxLTIuMzE2LTIuODk0LTQuMjI2LTIuODk0aC02LjI4MmMtLjg3NiAwLTEuNjUtLjc3My0xLjY1LTEuNjQ5em0xLjY0OS0xLjQ0N2MtLjc2NCAwLTEuNDQ3LjY4NC0xLjQ0NyAxLjQ0NyAwIC43NjQuNjgzIDEuNDQ3IDEuNDQ3IDEuNDQ3aDYuMjgyYzIuMDQ3IDAgMy44MTQgMS4zMDMgNC40NjYgMy4xNjRsLjA0Ny4xMzRIMjIuMTYyYy0uNzY0IDAtMS40NDcuNjgzLTEuNDQ3IDEuNDQ3cy42ODMgMS40NDcgMS40NDcgMS40NDdoMTAuNzk1bC0uMDQ3LjEzNGMtLjY1MiAxLjg2LTIuNDIgMy4xNjMtNC40NjYgMy4xNjNoLTYuMjgyYy0uMTc4IDAtLjM0NSAwLS42LjA4NC0uMzU3LjE4LS42OC40MzQtLjc2Ljc1bC0uMDAyLjAxMS0uMDA1LjAxYy0uMTY4LjMzNi0uMTY4Ljc1OCAwIDEuMDkzLjA5MS4xODIuMTc2LjM1MS4zNDUuNTJsMTIuNDc0IDEyLjQ3NGMuMjU0LjI1NC42ODQuNDI2IDEuMDIyLjQyNi4zMzcgMCAuNzY3LS4xNzIgMS4wMi0uNDI2LjYwMi0uNjAxLjU5My0xLjUzNC4wMDctMi4wMzdsLS4wMDYtLjAwNS0xMC4wMDctOS45MTVoMi43MDNjMy42ODUgMCA2LjgzLTIuNjA2IDcuNTUtNi4yMDFsLjAxNi0uMDgxaDEuODEyYy43NjQgMCAxLjQ0Ny0uNjgzIDEuNDQ3LTEuNDQ3IDAtLjc2OC0uNTk2LTEuNDQ3LTEuNDQ3LTEuNDQ3aC0xLjgxbC0uMDE4LS4wNzhjLS4yNy0xLjE3MS0uNzItMi4xNTktMS40MzctMy4wNTZsLS4xMzEtLjE2NGgzLjM5NmMuNzY0IDAgMS40NDctLjY4MyAxLjQ0Ny0xLjQ0NyAwLS43NjMtLjY4My0xLjQ0Ny0xLjQ0Ny0xLjQ0N2gtMTUuNjZ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg=="
              alt="Online payments"
            />
            <h5 class="third">Online payments</h5>
            <p class="fourth">
              Get more sales, by offering seamless and easy payment options on
              your online store with Dukaan.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-layout>
    <v-layout>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSI2MiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDU2IDYyIj4KICAgIDxwYXRoIGZpbGw9IiNEQ0U5RjQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTI5LjQgMzguMzJjLjA3LS42OC0uMTMtMS4zNy0uNTktMS44OS0uNDYtLjUzLTEuMTItLjgzLTEuODEtLjgzSDUuMDVMMjguNTMgNy4yNGwtMSAxN2MtLjA3LjY4LS40Ni40OSAwIDEgLjQ2LjUyLjMyIDEgMSAxaDIybC0yMy4xMyAyOCAyLTE1LjkyeiIgY2xpcC1ydWxlPSJldmVub2RkIi8+CiAgICA8cGF0aCBmaWxsPSIjMTQ2RUI0IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01NS41MSAyNC40MXYtLjAxYy0uMzItLjY5LTEuMDMtMS4xNC0xLjgtMS4xNEgzMC4yNmwyLjU3LTIwLjcyYy4xMS0uODctLjM4LTEuNzMtMS4xOC0yLjA5LS4yMy0uMS0uNS0uMTUtLjc4LS4xNS0uNiAwLTEuMTYuMjYtMS41NC43MkwuNzYgMzUuNDZjLS40OS41OS0uNiAxLjQxLS4yNyAyLjE0LjMyLjY5IDEuMDMgMS4xNCAxLjggMS4xNGgyMy40NWwtMi41NyAyMC43MmMtLjExLjg3LjM4IDEuNzMgMS4xOCAyLjA4Ljc5LjM1IDEuNzcuMTIgMi4zMi0uNTVsMjguNTYtMzQuNDRjLjUtLjU5LjYxLTEuNDMuMjgtMi4xNHpNMjcuOTUgNTMuMThsMi4wMy0xNi4xOWMuMDYtLjU4LS4xMS0xLjE1LS40OC0xLjU2LS4zOC0uNDQtLjkzLS42OS0xLjUxLS42OUg2LjUzTDI4LjA1IDguODJsLTIuMDMgMTYuMTljLS4wNy41Ny4xMSAxLjE1LjQ4IDEuNTYuMzguNDQuOTMuNjkgMS41LjY5aDIxLjQ2TDI3Ljk1IDUzLjE4eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo="
              alt="Addon plugins"
            />
            <h5 class="third">Addon plugins</h5>
            <p class="fourth">
              Enhance your store with unique features and capabilities by
              choosing from a list of pre-built plugins.
            </p>
          </v-col>
          <v-col cols="12" md="4">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MiIgaGVpZ2h0PSI2MiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDYyIDYyIj4KICAgIDxwYXRoIGZpbGw9IiNEQ0U5RjQiIGQ9Ik0yNS4xMDkgMzcuNDI5SDMuMTQ1djIwLjg5M2gyMS45NjRWMzcuNDI5ek0yNS42NDQgNC4yMTRIMy42OHYyMC44OTNoMjEuOTY0VjQuMjE0ek01OC4zMiAzNy40MjlIMzYuMzU2djIwLjg5M0g1OC4zMlYzNy40Mjl6TTU5LjM5NCA0LjIxNEgzNy40M3YyMC44OTNoMjEuOTY0VjQuMjE0eiIvPgogICAgPHBhdGggZmlsbD0iIzE0NkVCNCIgc3Ryb2tlPSIjMTQ2RUI0IiBzdHJva2Utd2lkdGg9Ii4xIiBkPSJNNC4zMzMuOTVDMi40OTMuOTUuOTUgMi40OTQuOTUgNC4zMzN2MTkuMzM0YzAgMS44NCAxLjU0NCAzLjM4MyAzLjM4MyAzLjM4M2gyMGMxLjg0IDAgMy4zODQtMS41NDQgMy4zODQtMy4zODNWNC4zMzNjMC0xLjg0LTEuNTQ0LTMuMzgzLTMuMzg0LTMuMzgzaC0yMHptMzMuMzM0IDBjLTEuODQgMC0zLjM4NCAxLjU0Mi0zLjM4NCAzLjM4M3YxOS4zMzRjMCAxLjgzOCAxLjU0NCAzLjM4MyAzLjM4NCAzLjM4M2gyMGMxLjg0IDAgMy4zODMtMS41NDQgMy4zODMtMy4zODNWNC4zMzNjMC0xLjg0LTEuNTQ0LTMuMzgzLTMuMzgzLTMuMzgzaC0yMHpNNS4wNSA1LjA1aDE4LjU2N3YxNy45SDUuMDVWNS4wNXptMzMuMzMzIDBINTYuOTV2MTcuOUgzOC4zODNWNS4wNXptLTM0LjA1IDI5LjljLTEuODQgMC0zLjM4MyAxLjU0NC0zLjM4MyAzLjM4M3YxOS4zMzRjMCAxLjg0IDEuNTQ0IDMuMzgzIDMuMzgzIDMuMzgzaDIwYzEuODQgMCAzLjM4NC0xLjU0NCAzLjM4NC0zLjM4M1YzOC4zMzNjMC0xLjg0LTEuNTQ0LTMuMzgzLTMuMzg0LTMuMzgzaC0yMHptMzMuMzM0IDBjLTEuODQgMC0zLjM4NCAxLjU0NC0zLjM4NCAzLjM4M3YxOS4zMzRjMCAxLjg0IDEuNTQ0IDMuMzgzIDMuMzg0IDMuMzgzaDIwYzEuODQgMCAzLjM4My0xLjU0NCAzLjM4My0zLjM4M1YzOC4zMzNjMC0xLjg0LTEuNTQ0LTMuMzgzLTMuMzgzLTMuMzgzaC0yMHpNNS4wNSAzOS4wNWgxOC41Njd2MTcuOUg1LjA1di0xNy45em0zMy4zMzMgMEg1Ni45NXYxNy45SDM4LjM4M3YtMTcuOXoiLz4KPC9zdmc+Cg=="
              alt="Your own app"
            />

            <h5 class="third">Your own app</h5>
            <p class="fourth">
              Get more loyal customers by getting your own mobile app and
              letting them buy directly from it.
            </p>
          </v-col>
          <v-col cols="12" md="4">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI1OCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDYwIDU4Ij4KICAgIDxwYXRoIGZpbGw9IiNEQ0U5RjQiIGQ9Ik0xLjc2NiA2LjgxYzAtMi43ODYgMi4yNTctNS4wNDQgNS4wNDItNS4wNDRoNDYuMzg2YzIuNzg1IDAgNS4wNDIgMi4yNTggNS4wNDIgNS4wNDN2NDQuMzgzYzAgMi43ODUtMi4yNTcgNS4wNDMtNS4wNDIgNS4wNDNINi44MDhjLTIuNzg1IDAtNS4wNDItMi4yNTgtNS4wNDItNS4wNDNWNi44MDl6Ii8+CiAgICA8cGF0aCBmaWxsPSIjMTQ2RUI0IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDYuODA5QzAgMy4wNDkgMy4wNDcgMCA2LjgwNyAwaDQ2LjM4NkM1Ni45NTMgMCA2MCAzLjA0OCA2MCA2LjgwOVY1MS4xOUM2MCA1NC45NTEgNTYuOTUzIDU4IDUzLjE5MyA1OEg2LjgwN0MzLjA0NyA1OCAwIDU0Ljk1MiAwIDUxLjE5MVY2Ljgxek02LjgwNyAzLjUzYy0xLjgxIDAtMy4yNzggMS40NjgtMy4yNzggMy4yNzlWNTEuMTljMCAxLjgxIDEuNDY4IDMuMjc5IDMuMjc4IDMuMjc5aDQ2LjM4NmMxLjgxIDAgMy4yNzgtMS40NjggMy4yNzgtMy4yNzlWNi44MWMwLTEuODEtMS40NjgtMy4yNzktMy4yNzgtMy4yNzlINi44MDd6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDxwYXRoIGZpbGw9IiMxNDZFQjQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjA4NiAxMy44N2MwLS45NzUuNzktMS43NjUgMS43NjUtMS43NjVIMzkuMTljLjk3NCAwIDEuNzY0Ljc5IDEuNzY0IDEuNzY1IDAgLjk3NS0uNzkgMS43NjUtMS43NjQgMS43NjVIMTEuODVjLS45NzQgMC0xLjc2NC0uNzktMS43NjQtMS43NjV6TTEwLjA4NiAyNS45NzRjMC0uOTc1Ljc5LTEuNzY1IDEuNzY1LTEuNzY1aDM2LjQxNGMuOTc1IDAgMS43NjUuNzkgMS43NjUgMS43NjUgMCAuOTc1LS43OSAxLjc2NS0xLjc2NSAxLjc2NUgxMS44NTFjLS45NzUgMC0xLjc2NS0uNzktMS43NjUtMS43NjV6TTEwLjA4NiAzOC4wNzljMC0uOTc1Ljc5LTEuNzY2IDEuNzY1LTEuNzY2SDM5LjE5Yy45NzQgMCAxLjc2NC43OSAxLjc2NCAxLjc2NiAwIC45NzUtLjc5IDEuNzY1LTEuNzY0IDEuNzY1SDExLjg1Yy0uOTc0IDAtMS43NjQtLjc5LTEuNzY0LTEuNzY1eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo="
              alt="Customer list"
            />

            <h5 class="third">Customer list</h5>
            <p class="fourth">
              Grow your store by engaging with your best customers. Create
              customers list from prebuilt lists.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-layout>
    <v-layout>
      <v-container>
        <v-row>
          <v-col cols="12" md="12">
            <h2 class="seventh">“We love Dukaan.”</h2>
            <span class="eighth"
              >Okay, we wrote these testimonials on their behalf. But you get
              the idea.</span
            >
          </v-col>
        </v-row>
      </v-container>
    </v-layout>
    <v-layout>
      <v-container>
        <v-row>
          <v-col cols="12" md="12">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4OCIgaGVpZ2h0PSI4OCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDg4IDg4Ij4KICAgIDxwYXRoIGZpbGw9IiMxNDZFQjQiIGQ9Ik04OCA0MS4zMkg2Ni42NTZjLjM2NSAxNS44MzggNC43NzcgMTcuNjM1IDEwLjMxOCAxOC4xNDlsMi4xMzcuMjd2MTcuNDE1bC0yLjQ2My0uMTM0Yy03LjIzNi0uNDE1LTE1LjIzNi0xLjc0My0yMC41NzMtOC40NTItNC42NzktNS44OC02Ljc0Mi0xNS40ODktNi43NDItMzAuMjM4VjExSDg4djMwLjMyek0zOC42NjggMTF2MzAuMzJoLTIxLjA2Yy4zNjYgMTUuODM4IDQuNjM1IDE3LjYzNSAxMC4xNzYgMTguMTQ5bDEuOTk1LjI3djE3LjQxNWwtMi4zMi0uMTM0Yy03LjIzNy0uNDE1LTE1LjMwOC0xLjc0My0yMC42NDYtOC40NTJDMi4xMzUgNjIuNjg4LjAwMSA1My4wOC4wMDEgMzguMzNWMTFoMzguNjY3eiIvPgo8L3N2Zz4K">
          <h5 class="audi">“I run an apparel boutique. With Dukaan, I am able to accept orders from anywhere in India. Business has gone up 64% after I switched to Dukaan.”</h5>
        <div class="santro">
        <span>Namrata Garg</span>
        <span class="merchant">Boutique owner @ Bangalore</span>
        </div>
          </v-col>
        </v-row>
      </v-container>
    </v-layout>
    <v-layout>
      <v-container class="bmw">
        <v-row>
          <v-col cols="12" md="12">
            <h2 class="ninth">
              Grow your online store. Learn the tips and tricks from experts.
            </h2>
          </v-col>
        </v-row>
      </v-container>
    </v-layout>
    <v-layout>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <img
              class="img"
              src="https://mydukaan.io/_next/static/images/dropshipping-big-ed8fdfa17f16a64c906805852b0a3334.jpg"
              height="200px"
              width="352px"
            />
            <h3 class="tenth">DROPSHIPPING</h3>
            <h5 class="eleventh">A Beginner’s Guide to Dropshipping</h5>
          </v-col>
          <v-col cols="12" md="4">
            <img
              src="https://mydukaan.io/_next/static/images/business-big-pink-2749760951aeac00d8e2f0d72cb7def3.jpg"
              height="200px"
              width="352px"
            />
            <h3 class="tenth">START YOUR BUSINESS</h3>
            <h5 class="eleventh">10 Best eCommerce Platforms</h5>
          </v-col>
          <v-col col="12" md="4">
            <img
              src="https://mydukaan.io/_next/static/images/start-business-big-43c2866d15bae47c5016b987a78db96c.jpg"
              height="200px"
              width="352px"
            />
            <h3 class="tenth">START YOUR BUSINESS</h3>
            <h5 class="eleventh">How to Start a Food Business Online</h5>
          </v-col>
        </v-row>
      </v-container>
    </v-layout>
    <v-layout>
      <v-container class="best">
        <v-row>
          <v-col cols="12" md="12">
            <h2 class="beginners">AS SEEN ON</h2>
          </v-col>
        </v-row>
      </v-container>
    </v-layout>
    <v-layout style="margin-top:-30px">
      <v-container>
        <v-row>
          <v-col cols="12" md="2">
            <a
              href="https://yourstory.com/2021/01/bengaluru-saas-startup-dukaan-smbs-mobile-first-ecommerce-site/amp"
              rel="noopener noreferrer"
              target="_blank"
              ><img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjEiIGhlaWdodD0iMjYiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxMjEgMjYiPgogICAgPHBhdGggZmlsbD0iI0IzQjNCMyIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC44MjkgMjUuMjQ4di04LjEyMkwwIC44NDNoMy45OWwyLjg4NCAxMS4wODRoLjExTDkuODY3Ljg0M2gzLjY1Mkw4LjY1IDE3LjEyNnY4LjA2MmwtMy44MjEuMDZ6bTEzLjEzLTE4Ljc5M3YxMy4xOGMwIDEuNzQ0Ljc1OCAyLjQwOSAxLjk5NSAyLjQwOXMxLjk5NS0uNjY1IDEuOTk1LTIuNDA5VjYuNDU2YzAtMS43NDMtLjc2OC0yLjQwOC0xLjk5NS0yLjQwOHMtMS45OTYuNjY1LTEuOTk2IDIuNDA4em0tMy43ODIgMTIuOTM5VjYuNjk3YzAtMy45IDIuMDQ2LTYuMTM2IDUuNzk3LTYuMTM2czUuODA2IDIuMjM3IDUuODA2IDYuMTM2djEyLjY5N2MwIDMuOS0yLjA1NSA2LjEzNi01LjgwNiA2LjEzNi0zLjc1MiAwLTUuNzk3LTIuMjM3LTUuNzk3LTYuMTM2ek0yOC4wNjUuODQzaDMuODYxdjE4LjgyM2MwIDEuNzQzLjc2OCAyLjM3OCAxLjk5NiAyLjM3OCAxLjIyNyAwIDEuOTk1LS42MzUgMS45OTUtMi4zNzhWLjg0M2gzLjYyMXYxOC41OGMwIDMuOTEtMS45OTUgNi4xMzgtNS42OTYgNi4xMzgtMy43MDIgMC01LjcwNy0yLjIyNy01LjcwNy02LjEzN0wyOC4wNjUuODQzem0yNS45NCAyNC40MDVoLTMuODkxYy0uMzIyLS45NzItLjQ0LTIuMDAyLS4zNS0zLjAyM3YtMy44MjljMC0yLjI2Ny0uNzY3LTMuMTA0LTIuNTAzLTMuMTA0aC0xLjM2N3Y5LjkzNmgtMy44MjFWLjg0M2g1LjgxNmMzLjk5IDAgNS42NTcgMS44NDQgNS42NTcgNS42MTJWOC4zN2MwIDIuNTA5LS43OTggNC4xMjEtMi40OTQgNC45MTd2LjA3YzEuOTA2LjgwNyAyLjUzNCAyLjYyIDIuNTM0IDUuMTZ2My43NjljLS4wODggMS4wMDIuMDM4IDIuMDEzLjM3IDIuOTYyaC4wNDl6TTQ3LjcyOSA0LjMzaC0xLjgzNXY3LjQ5N2gxLjQ4NmMxLjQyNyAwIDIuMjk1LS42MjUgMi4yOTUtMi41OFY2LjgzOWMwLTEuNzQzLS41ODktMi41MDktMS45NDUtMi41MDl6bTcuODIyIDIuMzY4YzAtMy45IDEuOTA2LTYuMTM2IDUuNjI3LTYuMTM2IDMuNzIyIDAgNS42NjcgMi4yMzcgNS42NjcgNi4xMzZ2Ljc2NmgtMy42NTFWNi40NTVjMC0xLjc0My0uNjk5LTIuNDA4LTEuOTE2LTIuNDA4cy0xLjkwNS42NjUtMS45MDUgMi40MDhjMCAxLjc0NC43NTggMy4xMDQgMy4yNjIgNS4zIDMuMjEzIDIuODIyIDQuMjEgNC44NDcgNC4yMSA3LjYzOSAwIDMuOS0xLjk0NSA2LjEzNi01LjY5NyA2LjEzNi0zLjc1IDAtNS42OTYtMi4yMzctNS42OTYtNi4xMzZ2LTEuNTAyaDMuNjExdjEuNzQ0YzAgMS43NDMuNzY4IDIuMzY3IDEuOTk2IDIuMzY3IDEuMjI3IDAgMS45OTUtLjYyNCAxLjk5NS0yLjM2NyAwLTEuNzQ0LS43NTgtMy4xMDQtMy4yNjItNS4zLTMuMjMzLTIuODIyLTQuMjQtNC44NDgtNC4yNC03LjYzOXpNNjcuOTEzIDQuMzNWLjg0M2gxMS44MTN2My40ODZoLTMuOTkxdjIwLjkyaC0zLjgyMVY0LjMyOGgtNC4wMDF6bTE2Ljk2IDIuMTI2djEzLjE4YzAgMS43NDQuNzY5IDIuNDA5IDEuOTk2IDIuNDA5IDEuMjI3IDAgMS45OTUtLjY2NSAxLjk5NS0yLjQwOVY2LjQ1NmMwLTEuNzQzLS43NjgtMi40MDgtMS45OTUtMi40MDhzLTEuOTY2LjY2NS0xLjk2NiAyLjQwOGgtLjAzem0tMy43OSAxMi45MzlWNi42OTdjMC0zLjkgMS45OTUtNi4xMzYgNS44MDYtNi4xMzZzNS43OTcgMi4yMzcgNS43OTcgNi4xMzZ2MTIuNjk3YzAgMy45LTIuMDQ2IDYuMTM2LTUuNzk3IDYuMTM2cy01LjgwNy0yLjIzNy01LjgwNy02LjEzNnptMjUuOTM5IDUuODU0aC0zLjg5MWMtLjMyMi0uOTcyLS40NDEtMi4wMDItLjM0OS0zLjAyM3YtMy44MjljMC0yLjI2Ny0uNzU4LTMuMTA0LTIuNDk0LTMuMTA0aC0xLjMxN3Y5LjkzNkg5NS4xNVYuODQzaDUuNzY2YzMuOTkxIDAgNS42NjcgMS44NDQgNS42NjcgNS42MTJWOC4zN2MwIDIuNTA5LS43OTggNC4xMjEtMi41MDQgNC45MTd2LjA3YzEuOTE2LjgwNyAyLjUzNCAyLjYyIDIuNTM0IDUuMTZ2My43NjljLS4wNjcgMS4wMDYuMDc2IDIuMDE1LjQxOSAyLjk2MmgtLjAxek0xMDAuODE3IDQuMzNoLTEuODQ2djcuNDk3aDEuNDk3YzEuNDI2IDAgMi4yOTQtLjYyNSAyLjI5NC0yLjU4VjYuODM5YzAtMS43NDMtLjU4OC0yLjUwOS0xLjk0NS0yLjUwOXptMTEuNTMzIDIwLjkydi04LjEyM0wxMDcuNTIxLjgxMmgzLjk5MWwyLjg4MyAxMS4wODVoLjA3TDExNy4zNDguODEySDEyMWwtNC44MjkgMTYuMzE0djguMDYybC0zLjgyMS4wNnoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPgo8L3N2Zz4K"
                alt="your story"
            /></a>
          </v-col>
          <v-col cols="12" md="2">
            <a
              href="https://www.forbesindia.com/article/brand-connect/indian-businesses-can-bounce-back-thanks-to-this-young-entrepreneurs-dukaan-app/61635/1"
              rel="noopener noreferrer"
              target="_blank"
              ><img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5NiIgaGVpZ2h0PSIyNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDk2IDI2Ij4KICAgIDxwYXRoIGZpbGw9IiNCM0IzQjMiIGQ9Ik03OC4xNzcgNy44MTdjLTEuMTEyLS40ODYtMi4zMTItLjcyMy0zLjUyLS42OTUtMS4yMDkuMDI5LTIuMzk3LjMyMi0zLjQ4Ny44Ni0xLjAxLjUxMi0xLjkwNiAxLjIzNC0yLjYzIDIuMTIyLS43MjMuODg4LTEuMjYgMS45MjEtMS41NzUgMy4wMzQtLjQxIDEuMjQ3LS41OCAyLjU2NC0uNSAzLjg3OC0uMDA0LjY5Mi4wNTYgMS4zODIuMTggMi4wNjIuMyAxLjcwMyAxLjEwMSAzLjI3IDIuMjkzIDQuNDg4IDEuMTkzIDEuMjIgMi43MiAyLjAzMiA0LjM3NCAyLjMzIDEuMDc0LjEzOCAyLjE2LjEzOCAzLjIzNCAwIDEuMTEtLjIwOCAyLjE3My0uNjI3IDMuMTMzLTEuMjM4IDEuMDAxLS42ODEgMi4wMDItMS42OTIgMi4wMDItMi4wMDEgMC0uMzEtLjMzLS42My0uNDctLjYzLS4yMTUuMDc1LS40MTguMTgzLS42LjMyLS45Mi42MjMtMi4wMDUuOTMzLTMuMTA0Ljg4Ny0uNzMuMDUyLTEuNDYtLjA2My0yLjE0LS4zMzgtLjY4MS0uMjc1LTEuMjk0LS43MDEtMS43OTUtMS4yNS0uMzg2LS4zNjgtLjcwNC0uODA1LS45NC0xLjI4OS0uNTgtMS4xODgtLjg4OC0yLjQ5Ny0uOTAyLTMuODI2di0uNjE5aDEwLjIxMnYtLjM2YzAtLjM4LS4wMi0uNzU4LS4wNi0xLjEzNS0uMzItMy4zNTItMS41NzItNS41NjktMy43MDUtNi42em0tNS4xNDUgNi40NzZINzEuNzN2LS4yODhjMC0uMTY2LjA1LS41NzguMS0uOTI5LjQzLTIuODY3IDEuNDcyLTQuNTg5IDIuNzY0LTQuNTg5IDEuMjkxIDAgMS45MzIgMS42OTEgMi4wODIgNC43OTZsLjA1Ljg3NmgtMS4yMDFsLTIuNDkzLjEzNHpNOS4xNSAyLjQyM2gyLjE3M2MyLjQ5MiAwIDIuOTAzLjA1MiAzLjc4NC41MDYgMS4yODEuNjQgMi4yMTIgMS45MjggMy4wMDMgNC4xMjUuMzMuOTA3LjMzLjkwNyAxLjA3Mi42OGwuNDktLjE1NC0uMDUtMy4yOGMwLTEuODA0LS4wNi0zLjQxMy0uMDktMy41NjhWLjQ0M0guMjZMLjAzLjQ5NVYxLjY2bC43MjEuMDgzYy4zNTItLjAwMi42OTkuMDc3IDEuMDE3LjIzLjMxOS4xNTQuNi4zNzguODI1LjY1Ny43NSAxLjEzNC44ODEgMi42Ny44ODEgOS45NzIgMCA3Ljc3Ni0uMTYgOS42NzQtLjg4IDEwLjY1My0uMTguMjQ5LS40MS40NTMtLjY3NS41OTgtLjI2NS4xNDQtLjU1OC4yMjYtLjg1OC4yMzgtMS4xLjIwNi0xLjA2LjE4NS0xLjA2Ljc3MyAwIC4zMiAwIC41MDUuMDguNTI2LjA4LjAyIDEyLjMwMyAwIDEyLjQzMyAwIC4xMyAwIC4xNi0xLjAzMSAwLTEuMDgzLS4zLS4wNzgtLjYwNC0uMTQtLjkxLS4xODUtLjM2NS0uMDQ0LS43MjQtLjEyNy0xLjA3Mi0uMjQ4LS44MDEtLjM1LTEuMjQxLTEuMzQtMS40MTItMy4wOTQtLjEyLTEuMjc5LS4yMS0zLjY1LS4yMS01LjM5M3YtMS42M2guNzRjLjkxNy0uMDMgMS44MzMuMDY3IDIuNzI0LjI4OS40My4yNy43OTYuNjM2IDEuMDcyIDEuMDY5LjI3Ny40MzMuNDU4LjkyNC41MyAxLjQzN2wuMTYuNjdoMS4xMjFWOC43NDVoLTEuMTIxbC0uMTcuNjdjLS4wNjYuNTEyLS4yNDUgMS0uNTIzIDEuNDMtLjI3Ny40MjgtLjY0Ny43ODYtMS4wOCAxLjA0Ni0uNDAzLjE3OC0uODQxLjI1OS0xLjI4LjIzNy0uNDkxIDAtMS4xODIuMDYyLTEuNTMyLjA2MmgtLjY0di0yLjA3M2MwLTIuMTE0LjExLTYuNjIxLjE4LTcuMzIybC4wNi0uMzcyek0zNC4wNiAxNC45NzRjLS4zNjEtMy4xNTYtMS42NjMtNS40NjYtMy44MDUtNi43NjUtMS4zMTYtLjcxNS0yLjc3NS0xLjEwNS00LjI2Mi0xLjE0LTEuNDg4LS4wMzMtMi45NjIuMjktNC4zMDcuOTQ0LTEuOTMgMS4wNDQtMy4zODQgMi44MjUtNC4wNTUgNC45Ni0uNjk1IDIuMzg1LS42OTUgNC45MjggMCA3LjMxMi4zNjkgMS4zMDMgMS4wNTkgMi40ODYgMi4wMDIgMy40MzQgMS4xNjYgMS4xNDMgMi42NTggMS44NjYgNC4yNTUgMi4wNjMgMS4wMzMuMDg4IDIuMDcuMDg4IDMuMTAzIDAgLjI5LS4wNTIuODAxLS4xNjUgMS4xMzItLjI1OCAxLjQ4Ni0uNDQ2IDIuODItMS4zMTUgMy44NDgtMi41MDkgMS4wMjctMS4xOTMgMS43MDYtMi42NjIgMS45NTgtNC4yMzUuMTg4LTEuMjYuMjMyLTIuNTM3LjEzLTMuODA2em0tNy42OCA5LjQ0N2MtMS44OTEuNTc3LTMuMjQzLTEuMjY5LTMuNzY0LTUuMTU3LS4xNy0yLjAzMS0uMTctNC4wNzQgMC02LjEwNS4zNy0zLjA5NCAxLjMxMi00LjcwMyAyLjc4NC00LjcwMy4yOTItLjAxNi41ODQuMDQuODUyLjE2MS4yNjguMTIyLjUwNC4zMDcuNjkuNTQgMS4yNCAxLjI5IDEuODIxIDMuNzM0IDEuODExIDcuNTggMCAzLjA5NS0uMyA1LjAwMi0xIDYuMzEyLS4yODYuNjEtLjc3MiAxLjA5Ni0xLjM3MiAxLjM3MnoiLz4KICAgIDxwYXRoIGZpbGw9IiNCM0IzQjMiIGQ9Ik00Ni41MDEgNy4wNDRjLS42NS0uMDMyLTEuMjk4LjEwNi0xLjg4Mi40MDItMS4yNC42MjMtMi4yNDIgMS42NTktMi44NDMgMi45MzlsLS4yNS40NjR2LS44MTVjMC0uNDU0LjA1LTEuMjg5LjA3LTEuODY2VjcuMTM2aC0uMTdjLS4yMiAwLTcuMDU4IDEuNDAzLTcuMjU5IDEuNDk2LS4yLjA5My0uMTYuMTEzLS4xNi40NTNzMCAuNDAzLjE2LjQyM2wuNzAxLjE0NWMuNi4xMjMuNzgxLjIxNiAxLjAwMS41NTcuNDYuNjI5LjU1IDEuNzMyLjU1IDYuNDE0LjA4NiAyLjExNS0uMDAxIDQuMjMzLS4yNiA2LjMzMi0uMDYyLjMxNi0uMjE4LjYwNS0uNDQ1LjgyNi0uMjI4LjIyMS0uNTE2LjM2NS0uODI2LjQxMmwtLjYzLjEzNGgtLjI0di40ODVjMCAuMzUgMCAuNTE1LjA3LjU1Ni4wNy4wNDIgMi4zODIuMDUyIDUuMTk1IDBoNS4xMDZ2LS41NDZjLjAzNy0uMTg0LjAzNy0uMzczIDAtLjU1Ny0uNjA3LS4wMjgtMS4yMS0uMTEtMS44MDItLjI0Ny0uNTctLjI1OC0uODUxLS43ODQtMS4wMDEtMS44NjctLjE0LTEuMjY5LS4yMy00LjQyNC0uMTktNy4wMTMuMDQtMi41ODggMC0yLjYyLjItMi43OTUuNjA4LS40OTUgMS4zNjctLjc1NSAyLjE0Mi0uNzMyLjczNi4wMTIgMS40NTkuMiAyLjExMi41NDcuMjMuMTI4LjQ3Ni4yMjUuNzMxLjI4OC4wOSAwIDEuNzYyLTQuNiAxLjc2Mi00LjgxNiAwLS4yMTYtLjg5LS41ODctMS44NDItLjU4N3oiLz4KICAgIDxwYXRoIGZpbGw9IiNCM0IzQjMiIGQ9Ik01OS42NjcgNy40MjVjLS41MTUtLjA5Ni0xLjA0LS4xMjQtMS41NjItLjA4Mi0xLjAwMS4wMDQtMS45OS4yMjUtMi45MDMuNjUtLjE4NS4wOTYtLjM3Ni4xODItLjU3LjI1N1Y0LjEyNWMuMDktMS4zNzMuMDktMi43NTIgMC00LjEyNS0uMjMxIDAtNy4yNzkgMS4zODItNy4zNTkgMS40NDQtLjA3LjEzMi0uMDkuMjg2LS4wNi40MzMgMCAuNDEyIDAgLjM4Mi44MzEuNTc3LjIzNS4wNS40NjEuMTM4LjY3LjI1OC4zNy4zNDYuNjE1LjgxMi42OTIgMS4zMi4xMy41MTYuMTUuODc3LjIxIDQuMzYzLjA2IDMuNDg1LjA1IDcuMjE5LS4wNSAxMy45MTJ2Mi43NzRsLjUxLjEyNGMuNzMxLjE2NSAyLjgyMy41MjYgMy41MDQuNTk4IDEuMzYzLjEwOSAyLjczMi4xMDkgNC4wOTUgMCAxLjUwNC0uMTgzIDIuOTMyLS43ODIgNC4xMzItMS43MzQgMS4yLS45NTEgMi4xMjgtMi4yMiAyLjY4NS0zLjY3LjMzNy0uOTM2LjU2OS0xLjkwOC42OTEtMi44OTguMTEtMS4zMzUuMDY3LTIuNjc4LS4xMy00LjAwMi0uNzYxLTMuMjY5LTIuNzIzLTUuNTA3LTUuMzg2LTYuMDc0em0tNC44NzYgMTYuNzhjLS4wOS0uMjM4LS4xOS04LjU3LS4xNS0xMS45MDJWOS43MDRsLjQ2LS4xNDRjLjM1My0uMDk3LjcxNy0uMTQyIDEuMDgyLS4xMzQuNDAyLS4wNC44MDYuMDUzIDEuMTUxLjI2OCAxLjE5Mi42MDggMi4wMDMgMi4wNjMgMi4zODMgNC4zODMuMTI4IDEuMzcyLjEyOCAyLjc1MyAwIDQuMTI1LS4zMSAyLjQ4Ni0xLjEwMSA0LjQ4Ni0yLjE1MiA1LjQ1Ni0uMzU1LjM2Mi0uODEuNjAzLTEuMzAyLjY5LS4zNzQuMDY3LS43NTcuMDY3LTEuMTMxIDAtLjI2LjA0Mi0uMzQtLjAzLS4zNC0uMTQ0ek05NS41NjUgMTcuNDljLS41OC0xLjE5Ni0xLjY1Mi0yLjAxLTMuODg1LTIuOTgtMS4yMjMtLjQwNS0yLjM0OS0xLjA3My0zLjMwMy0xLjk2LS4yMDctLjIxMS0uMzY1LS40Ny0uNDYtLjc1NC0uMDk2LS4yODQtLjEyNy0uNTg3LS4wOS0uODg1LS4wMDItLjI5OS4wNTQtLjU5NC4xNjQtLjg3LjExLS4yNzYuMjcyLS41MjcuNDc2LS43MzkuMjgxLS4zLjYzNy0uNTE3IDEuMDI4LS42MjYuMzkxLS4xMDkuODA0LS4xMDYgMS4xOTQuMDA3IDEuNDkyLjMzIDIuNDQzIDEuMzkzIDMuMjc0IDMuNjQuMjkuNzk1LjMzLjgyNi44NS42MmwuMzQxLS4xMjR2LS45MjljMC0uNTA1IDAtMS41NjctLjA2LTIuMzcxVjguMDc1bC0uMjUtLjExNGMtMS44MTgtLjY1Mi0zLjc0NC0uOTI1LTUuNjY2LS44MDQtMS42NjUuMDY0LTMuMjQ0Ljc3LTQuNDI1IDEuOTgtLjUyNC41MzUtLjkyOCAxLjE4MS0xLjE4NCAxLjg5NC0uMjU2LjcxMi0uMzU3IDEuNDc0LS4yOTggMi4yMzEuMDE0IDEuMTU3LjQ1OCAyLjI2NSAxLjI0MSAzLjA5NC44ODQuODcgMS45NTkgMS41MDggMy4xMzQgMS44NTYgMi44NzMgMS4xNTUgMy42MjQgMS44MzYgMy42MjQgMy4yNi4wMTUuNTU1LS4xNDggMS4xLS40NjUgMS41NS0uMzE3LjQ0OS0uNzcuNzc4LTEuMjg3LjkzNS0uNjU5LjE1Ni0xLjM0My4xNTYtMi4wMDIgMC0xLjQzMi0uMzgyLTIuNTIzLTEuNjYtMy40NDQtNC4wMTJsLS4yNC0uNjA5aC0uMjhjLS4xNjIuMDAzLS4zMjIuMDM4LS40NzEuMTA0bC0uMTkuMDkydjEuMDMyYzAgLjU2NyAwIDEuNzYzLjA2IDIuNjV2MS42M2wuMzIuMTM0YzEuMjQ1LjQyNSAyLjUzLjcxNiAzLjgzNC44NjZoMS44NjJjLjgwNS4wNTcgMS42MTQtLjAyMyAyLjM5My0uMjM3Ljk4OS0uMTk1IDEuOTEtLjY1NCAyLjY3My0xLjMzLjc2My0uNjc3IDEuMzM5LTEuNTQ5IDEuNjcyLTIuNTI3LjE5My0uNTM4LjI4MS0xLjEwOS4yNi0xLjY4MS4xMDMtLjg4MS0uMDM1LTEuNzc1LS40LTIuNTc5eiIvPgo8L3N2Zz4K"
                alt="forbes"
            /></a>
          </v-col>
          <v-col cols="12" md="2">
            <a
              href="https://www.livemint.com/brand-post/dukaan-made-in-india-app-is-helping-lakhs-of-businesses-from-going-bankrupt-11597320713381.html"
              rel="noopener noreferrer"
              target="_blank"
              ><img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MCIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDkwIDMyIj4KICAgIDxwYXRoIGZpbGw9IiNCM0IzQjMiIGQ9Ik00My43MDcgMGMuOTEtLjAwNCAxLjguMjYyIDIuNTYuNzY1Ljc1OC41MDMgMS4zNSAxLjIyIDEuNzAxIDIuMDYuMzUyLjg0LjQ0NiAxLjc2NS4yNzIgMi42NTgtLjE3NC44OTQtLjYxIDEuNzE2LTEuMjUgMi4zNjItLjY0Mi42NDYtMS40NiAxLjA4Ny0yLjM1MiAxLjI2Ny0uODkyLjE4LTEuODE3LjA5Mi0yLjY1OS0uMjU0LS44NDEtLjM0Ny0xLjU2Mi0uOTM1LTIuMDY5LTEuNjktLjUwNy0uNzU2LS43OC0xLjY0Ni0uNzgxLTIuNTU2LS4wMDMtLjYwNC4xMTQtMS4yMDMuMzQzLTEuNzYxLjIyOC0uNTYuNTY1LTEuMDY3Ljk5LTEuNDk2LjQyNS0uNDI4LjkzLS43NjggMS40ODgtMUM0Mi41MDYuMTIxIDQzLjEwNCAwIDQzLjcwNyAwek0xMS4zNCAzMS43M0guMDN2LTMuNjZoLjgxMWMuNTUxIDAgLjc0Mi0uMzEuNzQyLS44MjJWMTUuOTFjMC0uNTExLS4xOS0uODEyLS43NDItLjgxMkgwdi0zLjc1aDEwLjE5OHYzLjE3OWMuNjY1LTEuMDk4IDEuNjAxLTIuMDA3IDIuNzItMi42MzcgMS4xMTctLjYzIDIuMzc4LS45NjIgMy42NjItLjk2MiA0LjAwNyAwIDUuMzU5IDEuNjA0IDUuODIgNC4wMS42NDItMS4yMDkgMS42LTIuMjIgMi43NzEtMi45MjYgMS4xNzItLjcwNiAyLjUxMy0xLjA4MSAzLjg4LTEuMDg0IDUuMDkgMCA1Ljc4IDIuNDQ2IDUuNzggNi4wNzV2MTAuMjU2YzAgLjUuMjMxLjgxMi44NjIuODEyaC42NDJ2My42NjloLTExLjA3di0zLjY3aC4yOWMuNTIxIDAgLjc0Mi0uMzEuNzQyLS44MTF2LTkuMzI0YzAtMS42ODQtLjU3MS0yLjIxNS0xLjc0My0yLjIxNS0xLjU1MyAwLTIuMDY0IDEuMjgzLTIuMDY0IDMuMjU4djguMjRjMCAuNTQyLjIzLjg1My43NTEuODUzaC40NTF2My42NjloLTEwLjgzdi0zLjY3aC4zMTFjLjUwMSAwIC43MzItLjMxLjczMi0uODExdi05LjMyNGMwLTEuNjg0LS41NzEtMi4yMTUtMS43NTMtMi4yMTUtMS41NDMgMC0yLjAwNCAxLjI4My0yLjAwNCAzLjI1OHY4LjI0YzAgLjU0Mi4xOS44NTMuNzMxLjg1M2guNDcxbC0uMDEgMy42NTl6TTM5LjUgMTUuOTFjMC0uNTExLS4xOTEtLjgxMi0uNzQyLS44MTJoLS44NTJ2LTMuNzVoMTAuMTE4djE1LjljMCAuNTQyLjE5Ljg1Mi43NDIuODUyaC43NXYzLjY3aC0xMS42MXYtMy43aC44MzJjLjU1IDAgLjc0MS0uMzEuNzQxLS44MTJsLjAyLTExLjM0OHpNNjIuNTgxIDMxLjczaC0xMS4zdi0zLjY2aC44MzJjLjU1IDAgLjc0MS0uMzEuNzQxLS44MjFWMTUuOTFjMC0uNTExLS4xOS0uODEyLS43NDEtLjgxMmgtLjgzMnYtMy43NUg2MS4zOHYzLjIwOWMuNzQzLTEuMTIxIDEuNzUzLTIuMDQgMi45MzgtMi42NzMgMS4xODYtLjYzNCAyLjUxLS45NjIgMy44NTQtLjk1NiA0LjcwOSAwIDUuNzMgMi40NDYgNS43MyA2LjA3NXYxMC4yNTZjMCAuNS4xOC44MTIuODEyLjgxMmguNjgxdjMuNjY5aC0xMS4yNnYtMy42N2guNDYxYy41IDAgLjc0MS0uMzEuNzQxLS44MTF2LTkuMzI0YzAtMS42ODQtLjYxLTIuMjE1LTEuNzQzLTIuMjE1LTEuMTMyIDAtMi4yMTQuODkyLTIuMjE0IDIuODY3djguNjMxYy0uMDE0LjEtLjAwOC4yLjAxNy4yOTcuMDI1LjA5Ni4wNy4xODcuMTMuMjY2LjA2LjA4LjEzNy4xNDYuMjIzLjE5Ni4wODcuMDUuMTgyLjA4MS4yODEuMDk0aC41NTF2My42NTl6TTc1LjE4NCAxMS4zNDlsMy4wMDUtLjExLjM2LTQuNjQyaDcuNjI0djQuNzUyaDMuNjA2djMuODJoLTMuNjA2VjI0LjRjMCAyLjQxNi40NyAzLjE5OCAzLjExNiAzLjE5OGguNzF2NC4xM2MtMS42NjMuMTgtMy4zMzUuMjctNS4wMDguMjcxLTQuODE5IDAtNy4yNTMtMS41MDQtNy4yNTMtNS41MDRWMTUuMTY4aC0yLjQ0NGwtLjExLTMuODJ6Ii8+Cjwvc3ZnPgo="
                alt="mint"
            /></a>
          </v-col>
          <v-col cols="12" md="3">
            <a
              href="https://entrackr.com/2020/10/exclusive-dukaan-raises-6-mn-from-lightspeed-and-matrix-valuation-jumps-18x/"
              rel="noopener noreferrer"
              target="_blank"
              ><img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxODYiIGhlaWdodD0iMjUiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxODYgMjUiPgogICAgPHBhdGggZmlsbD0iI0IzQjNCMyIgZD0iTTAgMjQuNjQzVi4zNTdoMTcuODg1djQuMTA4SDQuODI5djUuMzU3SDE2Ljk5djQuMTA3SDQuODN2Ni42MDdoMTMuNDEzdjQuMTA3SDB6TTIyLjUzNSAyNC42NDNWLjM1N2g0LjY1bDkuODM3IDE2LjA3MlYuMzU3aDQuNDd2MjQuMTA4aC00LjgyOEwyNy4wMDYgOC43NXYxNS43MTVoLTQuNDd2LjE3OHpNNTIuMDQ0IDI0LjY0M1Y0LjQ2NWgtNy4xNTNWLjM1N2gxOS4xMzZ2NC4xMDhoLTcuMTU0djIwaC00LjgyOHYuMTc4ek02Ny4yNDYgMjQuNjQzVi4zNTdINzcuNDRjMi41MDQgMCA0LjQ3Mi4xNzkgNS41NDUuNzE1IDEuMjUyLjM1NyAyLjE0NiAxLjI1IDIuODYxIDIuMzIxLjcxNSAxLjA3MiAxLjA3MyAyLjMyMiAxLjA3MyAzLjc1IDAgMS43ODYtLjUzNiAzLjM5My0xLjYxIDQuNDY0LTEuMDcyIDEuMDcyLTIuNjgyIDEuOTY1LTQuODI4IDIuMzIyIDEuMDczLjUzNiAxLjk2NyAxLjI1IDIuNjgyIDEuOTY0LjcxNi43MTQgMS42MSAxLjk2NCAyLjY4MyAzLjkyOWwyLjg2MiA0LjY0M2gtNS43MjNsLTMuNTc3LTUuMTc5Yy0xLjI1Mi0xLjk2NC0yLjE0Ny0zLjAzNi0yLjUwNC0zLjU3MS0uNTM3LS41MzYtLjg5NC0uODkzLTEuNDMxLTEuMDcyLS41MzctLjE3OC0xLjI1Mi0uMzU3LTIuNTA0LS4zNTdoLTEuMDczdjEwLjE3OWgtNC42NXYuMTc4em00LjgyOS0xMy45MjhoMy41NzdjMi4zMjUgMCAzLjc1Ni0uMTc5IDQuMjkyLS4zNTguNTM3LS4xNzggMS4wNzMtLjUzNSAxLjQzLTEuMDcxLjM1OS0uNTM2LjUzOC0xLjA3MS41MzgtMS43ODYgMC0uODkzLS4xOC0xLjQyOC0uNzE2LTEuOTY0LS4zNTgtLjUzNi0xLjA3My0uODkzLTEuNzg4LS44OTNoLTcuMzMzdjYuMDcyek0xMzEuMjc1IDE1LjcxNGw0LjY1IDEuNDI5Yy0uNzE1IDIuNjc4LTEuOTY3IDQuNjQzLTMuNTc3IDUuODkzLTEuNzg4IDEuMjUtMy45MzUgMS45NjQtNi40MzggMS45NjQtMy4yMiAwLTUuOTAyLTEuMDcxLTcuODctMy4yMTQtMS45NjctMi4xNDMtMy4wNC01LjE3OS0zLjA0LTguOTI5IDAtNC4xMDcgMS4wNzMtNy4xNDMgMy4wNC05LjI4NiAyLjE0Ny0yLjUgNC44MjktMy41NzEgOC4yMjctMy41NzEgMi44NjIgMCA1LjM2Ni44OTMgNy4xNTQgMi42NzkgMS4wNzMuODkyIDEuNzg5IDIuNSAyLjUwNCA0LjQ2NGwtNC44MjkgMS4wNzFjLS4zNTgtMS4yNS0uODk0LTIuMzIxLTEuNzg4LTMuMDM1LS44OTUtLjcxNS0xLjk2OC0xLjA3Mi0zLjIyLTEuMDcyLTEuNzg4IDAtMy4yMTkuNzE0LTQuMjkyIDEuOTY0cy0xLjYwOSAzLjM5My0xLjYwOSA2LjI1YzAgMy4wMzYuNTM2IDUuMTc5IDEuNjA5IDYuNjA4IDEuMDczIDEuNDI4IDIuNTA0IDEuOTY0IDQuMjkyIDEuOTY0IDEuMjUyIDAgMi4zMjUtLjM1NyAzLjM5OS0xLjI1LjcxNS0uODkzIDEuMjUxLTIuMTQzIDEuNzg4LTMuOTI5ek0xNDAuMjE1IDI0LjY0M1YuMzU3aDQuODI5djEwLjcxNUwxNTQuODguMzU3aDYuNjE4bC05LjEyMiA5LjQ2NSA5LjQ3OSAxNC44MjFoLTYuMjU5bC02LjYxOC0xMS40MjgtMy45MzQgNC4xMDd2Ny4zMjFoLTQuODI5ek0xNjQuMzU5IDI0LjY0M1YuMzU3aDEwLjE5NWMyLjUwMyAwIDQuNDcxLjE3OSA1LjU0NC43MTUgMS4yNTIuMzU3IDIuMTQ2IDEuMjUgMi44NjEgMi4zMjEuNzE2IDEuMDcyIDEuMDczIDIuMzIyIDEuMDczIDMuNzUgMCAxLjc4Ni0uNTM2IDMuMzkzLTEuNjA5IDQuNDY0LTEuMDczIDEuMjUtMi42ODMgMS45NjUtNC44MjkgMi4zMjIgMS4wNzMuNTM2IDEuOTY3IDEuMjUgMi42ODMgMS45NjQuNzE1LjcxNCAxLjYwOSAxLjk2NCAyLjY4MiAzLjkyOWwyLjg2MiA0LjY0M2gtNS43MjNsLTMuNTc3LTUuMTc5Yy0xLjI1Mi0xLjk2NC0yLjE0Ni0zLjAzNi0yLjUwNC0zLjU3MS0uNTM2LS41MzYtLjg5NC0uODkzLTEuNDMxLTEuMDcyLS41MzYtLjE3OC0xLjI1Mi0uMzU3LTIuNTA0LS4zNTdoLTEuMDczdjEwLjE3OWgtNC42NXYuMTc4em00LjgyOS0xMy45MjhoMy41NzdjMi4zMjUgMCAzLjc1Ni0uMTc5IDQuMjkyLS4zNTguNTM3LS4xNzggMS4wNzQtLjUzNSAxLjQzMS0xLjA3MS4zNTgtLjUzNi41MzctMS4wNzEuNTM3LTEuNzg2IDAtLjg5My0uMTc5LTEuNDI4LS43MTYtMS45NjQtLjM1Ny0uNTM2LTEuMDczLS44OTMtMS43ODgtLjg5M2gtNy4zMzN2Ni4wNzJ6TTExMy4yMTEgMjQuNjQzTDEwMy41NTMuMzU3aC01LjE4N2wtOS4zIDI0LjEwOEg5OS40NHYtMi44NThjLjM1OC41MzYuODk1Ljg5MyAxLjYxLjg5My43MTUgMCAxLjI1Mi0uMzU3IDEuNjEtLjg5M3YyLjg1OGgxMC41NTJ2LjE3OHptLTEwLjU1Mi00LjI4NmMtLjM1OC41MzYtLjg5NS44OTMtMS40MzEuODkzLS43MTUgMC0xLjI1Mi0uMzU3LTEuNDMtLjg5M2gtLjM1OWMtLjUzNiAwLS44OTQuMTc5LTEuMjUxLjM1OGwtMS40MzEuNzE0Yy0uMTguMTc4LS4zNTguMTc4LS4zNTggMC0uMTc5IDAtLjE3OS0uMTc5LS4xNzktLjM1N3YtMi41YzAtLjg5My41MzctMS42MDcgMS4yNTItMi4xNDNsLjM1OC0uMTc5di0xLjk2NGMwLTQuNDY0IDIuMTQ2LTcuMzIxIDMuMDQtOC4yMTQuMTc5LS4xNzkuMTc5LS4xNzkuMzU4LS4xNzlzLjM1OCAwIC4zNTguMTc5Yy44OTQuODkzIDMuMDQgMy41NzEgMy4wNCA4LjIxNHYxLjk2NGwuMzU4LjE3OWMuNzE1LjUzNiAxLjI1MiAxLjI1IDEuMjUyIDIuMTQzdjIuNWMwIC4xNzggMCAuMzU3LS4xNzkuMzU3aC0uMzU4bC0xLjQzMS0uNzE0Yy0uMzU3LS4xNzktLjg5NC0uMzU4LTEuMjUyLS4zNThoLS4zNTd6Ii8+Cjwvc3ZnPgo="
                alt="entracker"
                class="entracker-logo"
            /></a>
          </v-col>
          <v-col cols="12" md="2">
            <a
              href="https://www.moneycontrol.com/news/business/startup/dukaan-steps-into-e-commerce-space-to-bring-neighbourhood-stores-online-6681251.html"
              rel="noopener noreferrer"
              target="_blank"
              ><img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxODQiIGhlaWdodD0iNDAiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxODQgNDAiPgogICAgPHBhdGggZmlsbD0iIzk5OSIgZD0iTTkwLjA2Ni44MTRDNjYuMDI0IDE0LjA3MSA0MS45ODItOC40MjMgMCAzLjc2djM0LjgzYzQxLjk4Mi0xMi4xODIgNjYuMDI0IDEwLjMxMiA5MC4wNjYtMi45MTVWLjgxNXpNMTg0IC44MTRIOTAuMDd2MzQuNzRIMTg0Vi44MTN6Ii8+CiAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTAuNzA2IDI2LjI1M0g3LjE4VjEyLjc1aDMuMzczdjEuNjU3Yy4zMzctLjYxNC44NTktMS4xMDQgMS41OTUtMS40NzMuNzM2LS4zNjggMS40NzItLjU1MiAyLjIzOC0uNTUyIDEuOTAyIDAgMy4xOS43MzYgMy44NjQgMi4yNC45NS0xLjUwNCAyLjMzLTIuMjQgNC4xNC0yLjI0IDEuMzE5IDAgMi40NTMuNDMgMy4zNzMgMS4yODkuOTIuODU5IDEuMzggMi4xNDggMS4zOCAzLjgzNnY4Ljc0NkgyMy43MXYtOC4wMWMwLS43NjctLjE4NC0xLjM4LS41ODMtMS44NDEtLjM2OC0uNDYtLjk1LS43MDYtMS43NDgtLjcwNi0uNzM2IDAtMS4zMTkuMjQ2LTEuNzQ4Ljc2Ny0uNDMuNTIyLS42NzUgMS4xMzYtLjY3NSAxLjkwM3Y3Ljg4N0gxNS40NnYtOC4wMWMwLS43NjctLjE4NS0xLjM4LS41ODMtMS44NDEtLjM5OS0uNDYtLjk4Mi0uNzA2LTEuNzE4LS43MDYtLjczNSAwLTEuMzQ5LjI0Ni0xLjc3OC43NjctLjQ2LjQ5MS0uNjc1IDEuMTM2LS42NzUgMS45MDNNMzEuNjQyIDE0LjM3NWMxLjI4OC0xLjM1IDIuOTQ0LTIuMDI1IDQuOTA3LTIuMDI1IDEuOTYyIDAgMy41ODguNjc1IDQuOTA2IDIuMDI1IDEuMjg4IDEuMzUgMS45NjMgMy4wNjkgMS45NjMgNS4xMjVzLS42NDQgMy43NzQtMS45NjMgNS4xMjVjLTEuMzE4IDEuMzUtMi45NDQgMi4wMjUtNC45MDYgMi4wMjUtMS45NjMgMC0zLjU4OC0uNjc1LTQuOTA3LTIuMDI1LTEuMjg4LTEuMzUtMS45NjItMy4wNjktMS45NjItNS4xMjUuMDMtMi4wNTYuNjc0LTMuNzc1IDEuOTYyLTUuMTI1em0yLjU3NiA3Ljk0OGMuNjQ0LjY3NSAxLjQ0MSAxLjAxMyAyLjM2MSAxLjAxMy45MiAwIDEuNzE4LS4zMzggMi4zNjItMS4wMTMuNjQ0LS42NzUuOTgxLTEuNjI2Ljk4MS0yLjgyM3MtLjMzNy0yLjE0OC0uOTgxLTIuODIzYy0uNjQ0LS42NzUtMS40NDItMS4wMTMtMi4zNjEtMS4wMTMtLjkyIDAtMS43MTguMzM4LTIuMzYyIDEuMDEzLS42NDQuNjc1LS45ODEgMS42MjYtLjk4MSAyLjgyMyAwIDEuMjI3LjMwNyAyLjE0OC45ODEgMi44MjN6TTQ5LjczIDE4LjQ4OXY3Ljc2NGgtMy41MjdWMTIuNzVoMy40MzV2MS42NTdjLjM2OC0uNjQ0Ljg4OS0xLjE2NiAxLjU5NC0xLjUwNC42NzUtLjMzNyAxLjQxMS0uNTIxIDIuMTc4LS41MjEgMS41MzMgMCAyLjcyOS40OSAzLjUyNiAxLjUwNC43OTcuOTgyIDEuMTk2IDIuMjcgMS4xOTYgMy44NjZ2OC41aC0zLjU1N3YtNy44ODZjMC0uNzk4LS4yMTUtMS40NDItLjU4My0xLjkzMy0uMzk4LS40OTEtMS4wMTItLjczNy0xLjgwOS0uNzM3LS43MzYgMC0xLjM1LjI3Ni0xLjc3OS43OTgtLjQ2LjUyMi0uNjc0IDEuMTk3LS42NzQgMS45OTV6TTcwLjQ3OCAyMS40OTNsMi45NDQuODljLS4zNjggMS4yNTgtMS4wNDIgMi4yNy0yLjA4NSAzLjA2OS0xLjA0My43OTgtMi4zMyAxLjE5Ny0zLjg2NCAxLjE5Ny0xLjg3IDAtMy40NjUtLjY0NS00Ljc4NC0xLjk2NC0xLjMxOS0xLjMyLTEuOTYyLTMuMDctMS45NjItNS4yNDggMC0yLjA4Ny42NDQtMy44MDUgMS45LTUuMTI1IDEuMjg5LTEuMzIgMi43OTEtMS45OTUgNC41MDktMS45OTUgMi4wMjQgMCAzLjU4OC42MTQgNC43NTMgMS44NzIgMS4xMzUgMS4yNTkgMS43MTcgMi45NDYgMS43MTcgNS4xMjV2LjkyMWwtLjAzLjE4NGgtOS4zNTNjLjAzLjg5LjM2OCAxLjYyNyAxLjAxMSAyLjIxLjY0NC41ODMgMS40MTEuODkgMi4zLjg5IDEuNDcyLjAzIDIuNDg0LS42NzYgMi45NDQtMi4wMjZ6bS02LjE5NC0zLjUyOWg1Ljg1N2MtLjAzLS43MzYtLjMwNy0xLjM4MS0uNzY3LTEuOTAzLS40OS0uNTIxLTEuMTk2LS43NjctMi4xNDYtLjc2Ny0uODU5IDAtMS41MzQuMjc2LTIuMDg1LjgyOS0uNTIyLjU1Mi0uNzk4IDEuMTY2LS44NiAxLjg0MXpNODAuNzM3IDMxLjU5aC0zLjc3MmwzLjA5Ny03LjAyOC01LjU1LTExLjgxNWgzLjk1NmwzLjQ2NSA3LjkxOCAzLjIyLTcuOTE4aDMuNzcyTTk4LjA2MSAxNS43NmMtLjk1IDAtMS43MTcuMzM4LTIuMzYxIDEuMDEzLS42NDQuNjc1LS45NSAxLjU5Ni0uOTUgMi43NjJzLjMzNyAyLjA4Ni45OCAyLjc5MmMuNjQ0LjY3NSAxLjQ0MiAxLjA0NCAyLjM5MiAxLjA0NC44MjkgMCAxLjUwMy0uMjE1IDEuOTk0LS42NzUuNDktLjQ2LjgyOC0uOTgzIDEuMDEyLTEuNTk2bDMuMDk3IDEuMDc0Yy0uMzA3IDEuMjU4LTEuMDEyIDIuMzAxLTIuMDg1IDMuMjIyLTEuMDc0Ljg5LTIuNDIzIDEuMzUtNC4wNDggMS4zNS0xLjk2MyAwLTMuNTg4LS42NzUtNC45MDctMi4wNTYtMS4zMTgtMS4zNS0xLjk2Mi0zLjA2OS0xLjk2Mi01LjEyNXMuNjQ0LTMuNzc0IDEuOTYyLTUuMTI1YzEuMjg4LTEuMzUgMi45MTMtMi4wMjUgNC44MTUtMi4wMjUgMS42NTYgMCAzLjAzNi40NiA0LjA3OCAxLjMyIDEuMDc0Ljg5IDEuNzQ4IDEuOTY0IDIuMDU1IDMuMjIybC0zLjE1OSAxLjEwNWMtLjQyOS0xLjUzNS0xLjQxLTIuMzAyLTIuOTEzLTIuMzAyek0xMDcuNjM4IDE0LjQwN2MxLjI4OC0xLjM1IDIuOTQ0LTIuMDI1IDQuOTA3LTIuMDI1czMuNTg4LjY3NSA0LjkwNiAyLjAyNWMxLjMxOSAxLjM1IDEuOTYzIDMuMDY5IDEuOTYzIDUuMTI1cy0uNjQ0IDMuNzc1LTEuOTYzIDUuMTI1Yy0xLjI4NyAxLjM1LTIuOTQzIDIuMDI1LTQuOTA2IDIuMDI1LTEuOTYzIDAtMy41ODgtLjY3NS00LjkwNy0yLjAyNS0xLjI4OC0xLjM1LTEuOTYyLTMuMDY5LTEuOTYyLTUuMTI1LjAzLTIuMDU2LjY3NC0zLjc3NCAxLjk2Mi01LjEyNXptMi41NDYgNy45OGMuNjQ0LjY3NCAxLjQ0MSAxLjAxMiAyLjM2MSAxLjAxMi45MiAwIDEuNzE3LS4zMzggMi4zNjEtMS4wMTMuNjQ0LS42NzUuOTgyLTEuNjI2Ljk4Mi0yLjgyM3MtLjMzOC0yLjE0OC0uOTgyLTIuODIzYy0uNjQ0LS42NzYtMS40NDEtMS4wMTMtMi4zNjEtMS4wMTMtLjkyIDAtMS43MTcuMzM3LTIuMzYxIDEuMDEyLS42NDQuNjc2LS45ODIgMS42MjctLjk4MiAyLjgyNC4wMzEgMS4xOTcuMzM4IDIuMTQ4Ljk4MiAyLjgyM3pNMTI1LjczNCAxOC41MjJ2Ny43NjRoLTMuNTI3VjEyLjc4M2gzLjQzNXYxLjY1N2MuMzY4LS42NDQuODg5LTEuMTY2IDEuNTk0LTEuNTAzLjY3NS0uMzM4IDEuNDExLS41MjIgMi4xNzgtLjUyMiAxLjUzMyAwIDIuNzI5LjQ5MSAzLjUyNiAxLjUwNC43OTcgMS4wMTIgMS4xOTYgMi4yNyAxLjE5NiAzLjg2NnY4LjUwMWgtMy41Mjd2LTcuODg3YzAtLjc5OC0uMjE0LTEuNDQyLS41ODItMS45MzMtLjM5OS0uNDkxLTEuMDEyLS43MzctMS44MDktLjczNy0uNzM2IDAtMS4zNS4yNzctMS43NzkuNzk4LS40OTEuNTIyLS43MDUgMS4xOTctLjcwNSAxLjk5NXpNMTQyLjA1MiA4Ljc2NHY0LjAyaDIuNjM3djMuMjIyaC0yLjYzN3Y1LjY0NmMwIC41NTMuMTIzLjk4Mi4zNjggMS4xOTcuMjQ1LjI0Ni42NDQuMzY5IDEuMTY1LjM2OS40OTEgMCAuODI4LS4wMzEgMS4wNzQtLjEyM3YzLjAwN2MtLjUyMi4yMTUtMS4xNjYuMzM4LTEuOTk0LjMzOC0xLjI4OCAwLTIuMjY5LS4zNjktMy4wMzYtMS4xMDUtLjczNi0uNzM2LTEuMTA0LTEuNzUtMS4xMDQtMy4wNjl2LTYuMjloLTIuMzYxdi0zLjIyM2guNjc1Yy42NDQgMCAxLjE2NS0uMTg0IDEuNTAyLS41ODMuMzM4LS40LjUyMi0uOTIuNTIyLTEuNTY1VjguNzAyTTE1NS40NzcgMTIuNzV2My42ODNjLS4zNjgtLjA2Mi0uNzA1LS4xMjMtMS4wNzMtLjEyMy0xLjAxMiAwLTEuODEuMzA3LTIuNDU0Ljg5LS42MTMuNTgzLS45MiAxLjU2NS0uOTIgMi45MTV2Ni4xNjloLTMuNTI2VjEyLjc4aDMuNDM0djEuOTk1Yy42NDQtMS40MTIgMS44NzEtMi4xMTggMy43MTEtMi4xMTguMTg0LjAzLjQ2LjA2Mi44MjguMDkyek0xNTguNzgzIDE0LjQwN2MxLjI4OC0xLjM1IDIuOTQ0LTIuMDI1IDQuOTA2LTIuMDI1IDEuOTYzIDAgMy41ODguNjc1IDQuOTA3IDIuMDI1IDEuMjg4IDEuMzUgMS45NjMgMy4wNjkgMS45NjMgNS4xMjVzLS42NDQgMy43NzUtMS45NjMgNS4xMjVjLTEuMjg4IDEuMzUtMi45NDQgMi4wMjUtNC45MDcgMi4wMjUtMS45NjIgMC0zLjU4Ny0uNjc1LTQuOTA2LTIuMDI1LTEuMjg4LTEuMzUtMS45NjMtMy4wNjktMS45NjMtNS4xMjUuMDMxLTIuMDU2LjY3NS0zLjc3NCAxLjk2My01LjEyNXptMi41NzYgNy45OGMuNjQ0LjY3NCAxLjQ0MSAxLjAxMiAyLjM2MSAxLjAxMi45MiAwIDEuNjg3LS4zMzggMi4zNjEtMS4wMTMuNjQ0LS42NzUuOTgyLTEuNjI2Ljk4Mi0yLjgyM3MtLjMzOC0yLjE0OC0uOTgyLTIuODIzYy0uNjQ0LS42NzYtMS40NDEtMS4wMTMtMi4zNjEtMS4wMTMtLjkyIDAtMS43MTcuMzM3LTIuMzYxIDEuMDEyLS42NDQuNjc2LS45ODEgMS42MjctLjk4MSAyLjgyNCAwIDEuMTk3LjMwNiAyLjE0OC45ODEgMi44MjN6TTE3Ni44NzQgNi40MzJoLTMuNTI2djE5Ljg1NWgzLjUyNlY2LjQzMnoiLz4KPC9zdmc+Cg=="
                alt="moneycontrol"
                class="entracker-logo"
            /></a>
          </v-col>
        </v-row>
      </v-container>
    </v-layout>
    <v-layout class="long">
      <v-container >
        <v-row>
          <v-col cols="12" md="12">
            <h2 class="stop">Chase your dreams. Start your online store.</h2>
            <p class="stop1">
              Take your business online with Dukaan. Get your free online store
              in 30 seconds.
            </p>
            <v-btn style="color:#146eb4" height="50px">Get Started</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-layout>
    <v-layout class="short">
      <v-container>
        <v-row>
          <v-col cols="12" md="2">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNTYiIGhlaWdodD0iNDQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxNTYgNDQiPgogICAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTY5LjcxMSAxMC44NXYyMS4xNTVjLjA1NC4zODItLjIxNi43MDktLjU5NC43NjNoLTIuNzUzYy0uMzc5LjA1NS0uNzAzLS4yMTgtLjc1Ny0uNlYzMC44NmMtMS4xMzMgMS40NzItMi44NjEgMi4zNDUtNS4yMzcgMi4zNDUtNC4zMiAwLTcuODMtMy43MDgtNy44My04LjU2IDAtNC44NTMgMy41NjQtOC41NiA3LjgzLTguNTYgMi4zMjIgMCA0LjA1Ljg3MiA1LjIzOCAyLjM0NHYtNy42MzNjLS4wNTUtLjM4Mi4yMTUtLjcxLjU5My0uNzY0aDIuNzU0Yy4zNzgtLjA1NC43MDIuMjE4Ljc1Ni42LjA1NC4xMDkuMDU0LjE2NCAwIC4yMTh6TTY1LjYwOCAyNC43YzAtMi41MDgtMS45OTgtNC40NzEtNC40MjgtNC40NzEtMi40ODQgMC00LjQyOCAyLjAxNy00LjQyOCA0LjQ3IDAgMi41MDkgMS45OTggNC40NzIgNC40MjggNC40NzIgMi40MyAwIDQuNDI4LTEuOTYzIDQuNDI4LTQuNDcxek04NC43NzcgMTYuNTc1Yy4zNzgtLjA1NS43MDIuMjE4Ljc1Ni42djE0LjgzYy4wNTQuMzgyLS4yMTYuNzA5LS41OTQuNzYzSDgyLjEzYy0uMzc4LjA1NS0uNzAyLS4yMTgtLjc1Ni0uNnYtMS4wOWMtLjkxOCAxLjM2My0yLjM3NiAyLjEyNy00LjM3NCAyLjEyNy0yLjk3IDAtNS4yMzgtMi4yOS01LjIzOC02LjI3di05LjU5N2MtLjA1NC0uMzgxLjIxNi0uNzA5LjU5NC0uNzYzaDIuODA4Yy4zNzgtLjA1NS43MDIuMjE4Ljc1Ni42djkuNDMzYzAgMS44NTMgMS4wOCAyLjcyNSAyLjUzOCAyLjcyNSAxLjYyIDAgMi45MTYtLjkyNyAyLjkxNi0zLjM4di04LjYxNWMtLjA1NC0uMzgxLjIxNi0uNzA5LjU5NC0uNzYzaDIuODA4ek0xMDEuNDA4IDMyLjgyM2gtMy4wMjRjLS4zNzggMC0uNzAyLS4xNjQtLjkxOC0uNDlsLTUuMjkxLTYuODd2Ni41NDJjLjA1My4zODItLjIxNi43MDktLjU5NC43NjNoLTIuODA4Yy0uMzc4LjA1NS0uNzAyLS4yMTgtLjc1Ni0uNlYxMC44NWMtLjA1NC0uMzgyLjIxNi0uNzA5LjU5NC0uNzYzaDIuODA3Yy4zNzgtLjA1NS43MDMuMjE4Ljc1Ni42djEzLjAzMWw0Ljk2OC02LjY1MmMuMjE2LS4zMjguNTQtLjQ5MS45MTgtLjQ5MWgzLjA3OGMuNjQ4IDAgLjg2NC40MzYuNDg2LjkyN2wtNS40IDcuMDg4IDUuNzI0IDcuMjUxYy4zMjQuNTQ2LjEwOC45ODItLjU0Ljk4MnpNMTA5Ljk0IDE2LjEzOWMzLjU2NCAwIDYuNTM0IDIuMTI2IDYuNTM0IDYuMzc5djkuNTQxYy4wNTQuMzgyLS4yMTYuNzEtLjU5NC43NjRIMTEzLjE4Yy0uMzc4LjA1NC0uNzAyLS4yMTgtLjc1Ni0uNlYzMS40MDVjLS45MTggMS4xNDUtMi4zMjIgMS44NTQtNC4zNzQgMS44NTQtMi44NjIgMC01LjQtMS42OS01LjQtNS4wNyAwLTMuMzgxIDIuNTM4LTUuMTI2IDUuNC01LjEyNiAxLjU2Ni0uMTA5IDMuMTMyLjQzNiA0LjM3NCAxLjQxOHYtMS43NDVjMC0xLjkwOC0uOTcyLTIuNzI2LTIuNDg0LTIuNzI2LTEuMTg4IDAtMi4xMDYuNDktMi4zNzYgMS4zNjMtLjE2Mi40MzYtLjMyNC43MDktLjgxLjcwOWgtMi41MzhjLS4zNzguMDU0LS43MDItLjIxOC0uNzU2LS42di0uMjE4Yy4zNzgtMy4yNzEgMy4xODYtNS4xMjUgNi40OC01LjEyNXptMi40ODQgMTEuOTk1YzAtMS4yNTQtMS4xMzQtMi4wMTgtMi45MTYtMi4wMThzLTIuNy44NzMtMi43IDIuMDE4YzAgMS4xNDUuODY0IDIuMDE3IDIuNyAyLjAxNyAxLjgzNiAwIDIuOTE2LS44MTggMi45MTYtMi4wMTd6TTEyNS42NTMgMTYuMTM5YzMuNTY0IDAgNi41MzQgMi4xMjYgNi41MzQgNi4zNzl2OS41NDFjLjA1NC4zODItLjIxNi43MS0uNTk0Ljc2NEgxMjguODkzYy0uMzc4LjA1NC0uNzAyLS4yMTgtLjc1Ni0uNlYzMS40MDVjLS45MTggMS4xNDUtMi4zMjIgMS44NTQtNC4zNzQgMS44NTQtMi44NjIgMC01LjQtMS42OS01LjQtNS4wNyAwLTMuMzgxIDIuNTM4LTUuMTI2IDUuNC01LjEyNiAxLjU2Ni0uMTA5IDMuMTMyLjQzNiA0LjM3NCAxLjQxOHYtMS43NDVjMC0xLjkwOC0uOTcyLTIuNzI2LTIuNDg0LTIuNzI2LTEuMTg4IDAtMi4xMDYuNDktMi4zNzYgMS4zNjMtLjE2Mi40MzYtLjMyNC43MDktLjgxLjcwOWgtMi41OTJjLS4zNzguMDU0LS43MDItLjIxOC0uNzU2LS42di0uMjE4Yy40MzItMy4yNzEgMy4yNC01LjEyNSA2LjUzNC01LjEyNXptMi40ODQgMTEuOTk1YzAtMS4yNTQtMS4xMzQtMi4wMTgtMi45MTYtMi4wMThzLTIuNy44NzMtMi43IDIuMDE4YzAgMS4xNDUuODY0IDIuMDE3IDIuNyAyLjAxNyAxLjgzNiAwIDIuOTE2LS44MTggMi45MTYtMi4wMTd6TTE0Mi44MjQgMTYuMTM5YzIuOTcgMCA1LjIzOCAyLjM0NCA1LjIzOCA2LjI3djkuNTk2Yy4wNTQuMzgyLS4yMTYuNzA5LS41OTQuNzYzaC0yLjgwOGMtLjM3OC4wNTUtLjcwMi0uMjE4LS43NTYtLjZ2LTkuNDMyYzAtMS44NTQtMS4wOC0yLjcyNi0yLjUzNy0yLjcyNi0xLjYyIDAtMi45MTYuOTI3LTIuOTE2IDMuMzh2OC42MTVjLjA1NC4zODItLjIxNi43MDktLjU5NC43NjNoLTIuODA4Yy0uMzc4LjA1NS0uNzAyLS4yMTgtLjc1Ni0uNnYtMTQuODNjLS4wNTQtLjM4MS4yMTYtLjcwOS41OTQtLjc2M2gyLjgwOGMuMzc4LS4wNTUuNzAyLjIxOC43NTYuNnYxLjAzNmMuODY0LTEuMzA5IDIuMzc2LTIuMDcyIDQuMzczLTIuMDcyeiIvPgogICAgPHBhdGggZmlsbD0iIzE0NkVCNCIgZD0iTTI5LjkxNSAxNi40MTFjLS4zMjQgNC41MjYtNC4yNjYgNy45MDYtOC43NDggNy41OC0zLjk5Ni0uMzI4LTcuMTgyLTMuNTQ1LTcuNTA2LTcuNTgtLjEwNy0uOTI3LjU5NS0xLjc0NCAxLjUxMi0xLjg1My45MTgtLjExIDEuNzI4LjYgMS44MzYgMS41MjZ2LjA1NWMuMjE2IDIuNjcxIDIuNTM4IDQuNjg5IDUuMTg0IDQuNDE2IDIuMzIyLS4yMTggNC4yMTItMi4wNzIgNC4zNzQtNC40MTYuMDU0LS45MjcuODY0LTEuNjM2IDEuNzgyLTEuNTI3Ljk3Mi4wNTUgMS42Mi44NzMgMS41NjYgMS44eiIvPgogICAgPHBhdGggZmlsbD0iIzE0NkVCNCIgZD0iTTIxLjc2MSAwQzkuNzc0IDAgMCA5Ljg2OSAwIDIyLjAyNyAwIDM0LjE4NiA5Ljc3NCA0NCAyMS43NjEgNDRjMTEuOTg4IDAgMjEuNzYxLTkuODY5IDIxLjc2MS0yMS45NzNDNDMuNTc2IDkuODcgMzMuODAyIDAgMjEuNzYyIDBjLjA1MyAwIC4wNTMgMCAwIDB6bTExLjY2NCAzMC4zMTVjMCAxLjc5OS0xLjQwNCAzLjIxNy0zLjE4NiAzLjIxN0gxMy4zMzhjLTEuNzgyIDAtMy4xODYtMS40NzItMy4xODYtMy4yMTd2LTE2LjYzYzAtMS43OTkgMS40NTgtMy4yMTcgMy4xODYtMy4yMTdoMTYuOWMxLjc4MyAwIDMuMTg3IDEuNDE4IDMuMTg3IDMuMjE3djE2LjYzeiIvPgogICAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE1Mi4wMDQgOC4xMjRjLTIuMjE0IDAtMy45NDIgMS44LTMuOTQyIDMuOTggMCAyLjE4MSAxLjc4MiAzLjk4IDMuOTk2IDMuOTggMi4xNiAwIDMuOTQyLTEuNzk5IDMuOTQyLTMuOTggMC0yLjE4LTEuNzgyLTMuOTgtMy45OTYtMy45OHptMCAuNjU0YzEuODM2IDAgMy4zNDggMS41MjcgMy4zNDggMy4zOCAwIDEuODU0LTEuNTEyIDMuMzgxLTMuMzQ4IDMuMzgxLTEuODM2IDAtMy4zNDgtMS41MjctMy4zNDgtMy4zOCAwLTEuOTA5IDEuNTEyLTMuMzggMy4zNDgtMy4zOHptLTEuMjQyIDEuNTI3djMuNzA3aC41OTRWMTIuNjVoLjgxbC44NjQgMS4zNjNoLjU5NGwtLjg2NC0xLjQxNy4yNy0uMDU1Yy4xNjItLjA1NC4zMjQtLjE2My40MzItLjI3Mi4xMDgtLjExLjE2Mi0uMjE4LjIxNi0uMzgyLjA1NC0uMTEuMDU0LS4yNzMuMDU0LS4zODIgMC0uMTA5IDAtLjI3Mi0uMDU0LS4zODEtLjA1NC0uMTY0LS4xMDgtLjI3My0uMjE2LS4zODItLjEwOC0uMTA5LS4yNy0uMjE4LS40MzItLjI3My0uMjE2LS4xMDktLjQ4Ni0uMTYzLS43MDItLjEwOWgtMS41NjZ2LS4wNTR6bS42NDguNDlIMTUyLjU0NGMuMTA4IDAgLjIxNi4wNTUuMjcuMTEuMTA4LjA1NC4xNjIuMTA5LjIxNi4xNjMuMDU0LjExLjEwOC4yMTguMTA4LjMyNyAwIC4xMSAwIC4yMTgtLjEwOC4zMjctLjA1NC4xMS0uMTA4LjE2NC0uMjE2LjIxOWwtLjMyNC4xMDljLS4xMDggMC0uMjE2LjA1NC0uMzI0IDBoLS44MWwuMDU0LTEuMjU1eiIvPgo8L3N2Zz4K"
              alt="dukaan"
            />
          </v-col>
          <v-col cols="12" md="2">
            <ul>
              <li>
                <a href="https://mydukaan.io/tools" class="a">Business Tools</a>
              </li>
              <li>
                <a href="https://mydukaan.io/finder" class="a">Dukaan Finder</a>
              </li>
              <li>
                <a href="https://mydukaan.io/dukaan-for-pc" class="a"
                  >Dukaan for PC</a
                >
              </li>
              <li>
                <a href="https://mydukaan.io/dukaan-plus" class="a"
                  >Dukaan Plus</a
                >
              </li>
              <li>
                <a href="https://mydukaan.io/apps" class="a"
                  >Dukaan App Store</a
                >
              </li>
            </ul>
          </v-col>
          <v-col col="12" md="2">
            <ul>
              <li>
                <a
                  href="https://help.mydukaan.io/en/"
                  target="_blank"
                  rel="noreferrer"
                  class="a"
                  >Help Center</a
                >
              </li>
              <li><a href="https://mydukaan.io/blog" class="a">Blog</a></li>
              <li>
                <a
                  href="/files/Mydukaan_banned_products.pdf"
                  target="_blank"
                  rel="noreferrer"
                  class="a"
                  >Banned Items</a
                >
              </li>
            </ul>
          </v-col>
          <v-col cols="12" md="2">
            <div>
              <ul>
                <li>
                  <a href="https://mydukaan.io/about-us" class="a">About</a>
                </li>
                <li>
                  <a href="https://mydukaan.io/privacy" class="a">Privacy</a>
                </li>
                <li><a href="https://mydukaan.io/terms" class="a">Terms</a></li>
                <li>
                  <a href="https://mydukaan.io/contact-us" class="a">Contact</a>
                </li>
                <li><a href="https://mydukaan.io/faq" class="a">FAQ's</a></li>
              </ul>
            </div>
          </v-col>
          <v-col cols="12" md="2">
            <ul>
              <li>
                <a
                  href="https://angel.co/company/dukaan-app/jobs"
                  target="_blank"
                  rel="noreferrer"
                  class="a"
                  >Jobs</a
                >
              </li>
              <li>
                <a
                  href="https://drive.google.com/drive/folders/1nnFfHCa_2GJ-MrIjGaj1H_dKmCQfMDcC"
                  target="_blank"
                  rel="noreferrer"
                  class="a"
                  ><span>Media Kit</span></a
                >
              </li>
              <li>
                <a href="mailto:suumit@mydukaan.io" class="a">Press Inquiry</a>
              </li>
            </ul>
          </v-col>
          <v-col cols="12" md="2">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/mydukaanapp/"
                  target="_blank"
                  rel="noreferrer"
                  class="a"
                  >Facebook</a
                >
              </li>
              <li>
                <a
                  href="https://twitter.com/mydukaanapp"
                  target="_blank"
                  rel="noreferrer"
                  class="a"
                  >Twitter</a
                >
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/dukaan/"
                  target="_blank"
                  rel="noreferrer"
                  class="a"
                  >Linkedin</a
                >
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </v-layout>
    <v-layout>
      <v-container>
        <v-row>
          <v-col cols="12" md="10">
            <span class="dot"
              >Growthpond Technology Pvt Ltd. All rights reserved, 2021.</span
            >
          </v-col>
          <v-col cols="12" md="2">
            <span class="dot"
              >Made in
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNyIgaGVpZ2h0PSIxOCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI3IDE4Ij4KICAgIDxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMCkiPgogICAgICAgIDxwYXRoIGZpbGw9IiNGOTMiIGQ9Ik0yNyAuMDQ4SDB2MTcuMDZoMjdWLjA0OHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjcgNS43NjNIMHY1LjcxNWgyN1Y1Ljc2M3oiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMTI4ODA3IiBkPSJNMjcgMTEuMzkzSDB2NS43MTVoMjd2LTUuNzE1eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMwMDgiIGQ9Ik0xMy41IDEwLjg4M2MxLjM0MiAwIDIuNDMtMS4wMzIgMi40My0yLjMwNCAwLTEuMjczLTEuMDg4LTIuMzA0LTIuNDMtMi4zMDRzLTIuNDMgMS4wMzEtMi40MyAyLjMwNGMwIDEuMjcyIDEuMDg4IDIuMzA0IDIuNDMgMi4zMDR6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEzLjUgMTAuNTQzYzEuMTQzIDAgMi4wNy0uODggMi4wNy0xLjk2NHMtLjkyNy0xLjk2My0yLjA3LTEuOTYzYy0xLjE0MyAwLTIuMDcuODc5LTIuMDcgMS45NjMgMCAxLjA4NS45MjcgMS45NjQgMi4wNyAxLjk2NHoiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMDA4IiBkPSJNMTMuNSA5LjAwNWMuMjQ5IDAgLjQ1LS4xOTEuNDUtLjQyN3MtLjIwMS0uNDI3LS40NS0uNDI3Yy0uMjQ4IDAtLjQ1LjE5MS0uNDUuNDI3cy4yMDEuNDI3LjQ1LjQyN3pNMTUuNTcgOC43NDljLjA5IDAgLjA5LjA4NS4wOS4wODUgMCAuMDg1LS4wOS4wODUtLjA5LjA4NS0uMDkgMC0uMDktLjA4NS0uMDktLjA4NSAwLS4wODUuMDktLjA4NS4wOS0uMDg1eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMwMDgiIGQ9Ik0xMy41IDEwLjU0MWwuMDktMS4xOTUtLjA5LS41MTItLjA5LjU5OC4wOSAxLjExek0xNS40OCA5LjI2Yy4wOSAwIC4wOS4wODYuMDkuMTcxIDAgLjA4NS0uMDkuMDg1LS4xOC4wODVzLS4wOS0uMDg1LS4wOS0uMTdjLjA5LS4wODYuMDktLjA4Ni4xOC0uMDg2ek0xMi45NiAxMC41NDFsLjM2LTEuMTEuMDktLjU5Ny0uMTguNTEyLS4yNyAxLjE5NXpNMTUuMjEgOS42ODdjLjA5IDAgLjA5LjA4NSAwIC4xNyAwIC4wODYtLjA5LjA4Ni0uMTggMC0uMDkgMC0uMDktLjA4NSAwLS4xN2guMTh6TTEyLjQyIDEwLjI4NWwuNzItMS4wMjQuMjctLjUxMi0uMzYuNDI2LS42MyAxLjExek0xNC44NSAxMC4xMTN2LjE3MWgtLjE4di0uMTdjLjA5LS4wODYuMTgtLjA4Ni4xOCAwek0xMi4wNiA5Ljk0NGwuOS0uNzY5LjM2LS40MjYtLjQ1LjM0MS0uODEuODU0ek0xNC40IDEwLjM3YzAgLjA4NCAwIC4wODQtLjA5LjE3LS4wOSAwLS4wOSAwLS4xOC0uMDg2IDAtLjA4NSAwLS4wODUuMDktLjE3LjA5IDAgLjE4LjA4NS4xOC4wODV6TTExLjcgOS42MDJsMS4xNy0uNTEyLjQ1LS4zNDEtLjU0LjI1Ni0xLjA4LjU5N3pNMTMuODYgMTAuNTRjMCAuMDg1IDAgLjA4NS0uMDkuMDg1cy0uMDkgMC0uMDktLjA4NSAwLS4wODUuMDktLjA4NS4wOSAwIC4wOS4wODV6TTExLjQzIDkuMDlsMS4yNi0uMjU2LjU0LS4xNy0uNjMuMDg0LTEuMTcuMzQyek0xMy4zMiAxMC41NGMwIC4wODUtLjA5LjA4NS0uMDkuMDg1LS4wOSAwLS4wOS0uMDg1LS4wOS0uMDg1IDAtLjA4NS4wOS0uMDg1LjA5LS4wODUuMDkgMCAuMDkuMDg1LjA5LjA4NXpNMTEuNDMgOC41NzhsMS4yNi4wODUuNjMtLjA4NS0uNjMtLjA4NS0xLjI2LjA4NXpNMTIuNzggMTAuNDU0YzAgLjA4Ni0uMDkuMDg2LS4xOC4wODZzMC0uMDg2IDAtLjE3YzAtLjA4Ni4wOS0uMDg2LjE4LS4wODZ2LjE3ek0xMS40MyA4LjA2NmwxLjE3LjM0MS42My4wODYtLjU0LS4xNzEtMS4yNi0uMjU2ek0xMi4zMyAxMC4xOTljMCAuMDg1LS4wOS4wODUtLjE4IDAtLjA5IDAtLjA5LS4wODYgMC0uMTcxIDAtLjA4NS4wOS0uMDg1LjE4IDB2LjE3ek0xMS43IDcuNTU0bDEuMDguNjgzLjU0LjI1Ni0uNDUtLjM0MS0xLjE3LS41OTh6TTExLjg4IDkuODU4aC0uMTh2LS4xNzFoLjE4Yy4wOS4wODUuMDkuMTcgMCAuMTd6TTEyLjA2IDcuMjEzbC44MS44NTQuNDUuMzQxLS4zNi0uNDI3LS45LS43Njh6TTExLjYxIDkuNDNjLS4wOSAwLS4wOSAwLS4xOC0uMDg0LS4wOS0uMDg2IDAtLjA4Ni4wOS0uMTcxLjA5IDAgLjA5IDAgLjE4LjA4NSAwIC4wODYtLjA5LjE3LS4wOS4xN3oiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMDA4IiBkPSJNMTIuNDIgNi44NzJsLjU0IDEuMTEuMzYuNDI3LS4yNy0uNTEyLS42My0xLjAyNXpNMTEuNDMgOC45MmMtLjA5IDAtLjA5IDAtLjA5LS4wODYgMC0uMDg1IDAtLjA4NS4wOS0uMDg1cy4wOSAwIC4wOS4wODUgMCAuMDg1LS4wOS4wODV6TTEyLjk2IDYuNjE2bC4yNyAxLjE5NS4xOC41MTItLjA5LS41OTctLjM2LTEuMTF6TTExLjQzIDguNDA4Yy0uMDkgMC0uMDktLjA4Ni0uMDktLjA4NiAwLS4wODUuMDktLjA4NS4wOS0uMDg1LjA5IDAgLjA5LjA4NS4wOS4wODUgMCAuMDg2LS4wOS4wODYtLjA5LjA4NnpNMTMuNSA2LjYxNmwtLjA5IDEuMTk1LjA5LjUxMi4wOS0uNTk3LS4wOS0xLjExek0xMS41MiA3Ljg5NmMtLjA5IDAtLjA5LS4wODYtLjA5LS4xN2guMThzLjA5LjA4NC4wOS4xN2gtLjE4ek0xNC4wNCA2LjYxNmwtLjM2IDEuMTEtLjA5LjU5Ny4xOC0uNTEyLjI3LTEuMTk1ek0xMS43OSA3LjQ3Yy0uMDkgMC0uMDktLjA4NiAwLS4xNzIgMC0uMDg1LjA5LS4wODUuMTggMCAuMDkgMCAuMDkuMDg2IDAgLjE3MWgtLjE4ek0xNC41OCA2Ljg3MmwtLjcyIDEuMDI1LS4yNy41MTIuMzYtLjQyNy42My0xLjExek0xMi4xNSA3LjA0M3YtLjE3aC4xOHYuMTdjLS4wOS4wODUtLjE4LjA4NS0uMTggMHpNMTQuOTQgNy4yMTNsLS45Ljc2OC0uMzYuNDI3LjQ1LS4zNDEuODEtLjg1NHpNMTIuNiA2Ljc4NmMwLS4wODUgMC0uMDg1LjA5LS4xNy4wOSAwIC4wOSAwIC4xOC4wODUgMCAuMDg1IDAgLjA4NS0uMDkuMTctLjA5IDAtLjE4LS4wODUtLjE4LS4wODV6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iIzAwOCIgZD0iTTE1LjMgNy41NTRsLTEuMTcuNTEyLS40NS4zNDIuNTQtLjI1NiAxLjA4LS41OTh6TTEzLjE0IDYuNjE2YzAtLjA4NSAwLS4wODUuMDktLjA4NXMuMDkgMCAuMDkuMDg1YzAgLjA4NiAwIC4wODYtLjA5LjA4NnMtLjA5IDAtLjA5LS4wODZ6TTE1LjU3IDguMDY2bC0xLjI2LjI1Ni0uNTQuMTcuNjMtLjA4NSAxLjE3LS4zNDF6TTEzLjY4IDYuNjE2YzAtLjA4NS4wOS0uMDg1LjA5LS4wODUuMDkgMCAuMDkuMDg1LjA5LjA4NSAwIC4wODYtLjA5LjA4Ni0uMDkuMDg2LS4wOSAwLS4wOS0uMDg2LS4wOS0uMDg2ek0xNS41NyA4LjU3OGwtMS4yNi0uMDg1LS41NC4wODUuNjMuMDg1IDEuMTctLjA4NXpNMTQuMjIgNi43MDFjMC0uMDg1LjA5LS4wODUuMTgtLjA4NXYuMTdzLS4wOS4wODYtLjE4LjA4NnYtLjE3ek0xNS41NyA5LjA5bC0xLjE3LS4zNDItLjYzLS4wODUuNTQuMTcgMS4yNi4yNTd6TTE0LjY3IDYuOTU3YzAtLjA4NS4wOS0uMDg1LjE4IDAgLjA5IDAgLjA5LjA4NSAwIC4xNyAwIC4wODYtLjA5LjA4Ni0uMTggMHYtLjE3ek0xNS4zIDkuNjAybC0xLjA4LS42ODMtLjU0LS4yNTYuNDUuMzQyIDEuMTcuNTk3ek0xNS4xMiA3LjI5OGguMTh2LjE3MWgtLjE4Yy0uMDktLjA4NS0uMDktLjE3IDAtLjE3ek0xNC45NCA5Ljk0NGwtLjgxLS44NTQtLjQ1LS4zNDEuMzYuNDI2LjkuNzY5ek0xNS4zOSA3LjcyNWMuMDkgMCAuMDkgMCAuMTguMDg1IDAgLjA4NiAwIC4wODYtLjA5LjE3MS0uMDkgMC0uMDkgMC0uMTgtLjA4NSAwLS4wODYuMDktLjE3LjA5LS4xN3oiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMDA4IiBkPSJNMTQuNTggMTAuMjg1bC0uNTQtMS4xMS0uMzYtLjQyNi4yNy41MTIuNjMgMS4wMjR6TTE1LjU3IDguMjM3Yy4wOSAwIC4wOSAwIC4wOS4wODUgMCAuMDg2IDAgLjA4Ni0uMDkuMDg2cy0uMDkgMC0uMDktLjA4NmMwLS4wODUgMC0uMDg1LjA5LS4wODV6TTE0LjA0IDEwLjU0MWwtLjI3LTEuMTk1LS4xOC0uNTEyLjA5LjU5OC4zNiAxLjExeiIvPgogICAgPC9nPgogICAgPGRlZnM+CiAgICAgICAgPGNsaXBQYXRoIGlkPSJjbGlwMCI+CiAgICAgICAgICAgIDxyZWN0IHdpZHRoPSIyNyIgaGVpZ2h0PSIxNy4wNiIgeT0iLjA0OCIgZmlsbD0iI2ZmZiIgcng9IjMiLz4KICAgICAgICA8L2NsaXBQYXRoPgogICAgPC9kZWZzPgo8L3N2Zz4K"
                alt="india"
            /></span>
          
          </v-col>
        </v-row>
      </v-container>
    </v-layout>
  </div>
</template>
<style scoped>
.car {
  background-color: white;
}
.zone {
  margin-top: 60px;
  height: 150px;
  border: 1px solid black;
}
.boom {
  margin-top: 80px;
  height: 80px;
}
h2 {
  font-size: 28px;
  line-height: 36px;
  font-weight: 500;
  margin-bottom: 16px;
}
.grenade {
  font-size: 18px;
  line-height: 26px;
  color: #4d4d4d;
}
.vehicle {
  margin-top: 30px;
}
.last2 {
 background-color: white;} 
.p {
  color: #df1e5b;
}
.o {
  color: #ee741f;
}
.back {
  font-size: 36px;
  line-height: 42px;
  font-weight: 600;
  letter-spacing: -1.44px;
}
.last4 {
  padding: 0;
  width: 1144px;
  margin: 0 auto;
}
.last5 {
  margin: 0 -16px;
}
.last {
  display: flex;
  -moz-box-align: center;
  align-items: center;
  -moz-box-pack: justify;
  justify-content: space-between;
  font-size: 18px;
  line-height: 26px;
  /* padding: 20px 0; */
}
h1 {
  font-size: 48px;
  line-height: 54px;
  font-weight: 600;
  margin-bottom: 16px;
  letter-spacing: -1.92px;
}
h3 {
  font-size: 18px;
  line-height: 26px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #146eb4;
}
h4 {
  margin-top: 10px;
  font-size: 28px;
  font-weight: 500;
  text-align: center;
}
p {
  font-size: 20px;
  line-height: 28px;
  color: #4d4d4d;
  margin-bottom: 40px;
}
.last {
  position: relative;
}
.front {
  margin-top: 150px;
}
span {
  font-size: 18px;
  line-height: 26px;
  margin-right: 32px;
  cursor: pointer;
}
.first {
  margin-top: 100px;
}
.second {
  font-size: 20px;
  line-height: 28px;
  font-weight: 400;
  margin: 0;
  color: #4d4d4d;
}
.header {
  font-size: 36px;
  line-height: 42px;
  font-weight: 600;
  letter-spacing: -1.44px;
  margin-bottom: 40px;
}
.third {
  margin-top: 24px;
  margin-bottom: 8px;
  font-size: 20px;
  line-height: 28px;
  font-weight: 500;
}
.fourth {
  font-size: 16px;
  line-height: 24px;
  color: #4d4d4d;
}
.sixth {
  margin-top: 100px;
}
.seventh {
  font-size: 36px;
  line-height: 42px;
  font-weight: 600;
  letter-spacing: -1.44px;
  margin-bottom: 16px;
}
.eighth {
  font-size: 18px;
  line-height: 26px;
}
.ninth {
  font-size: 36px;
  line-height: 42px;
  font-weight: 600;
  letter-spacing: -1.44px;
  margin-bottom: 64px;
}
.tenth {
  margin: 0 0 6px;
  margin-top: 20px;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: #4d4d4d;
}
.eleventh {
  font-size: 18px;
  line-height: 26px;
  font-weight: 500;
  margin: 0;
  color: #1a181e;
}
.bmw {
  margin-top: 100px;
  height: 100px;
}
.beginners {
  font-size: 18px;
  line-height: 26px;
  font-weight: 500;
}
.best {
  margin-top: 50px;
}
.stop {
  font-size: 36px;
  line-height: 42px;
  font-weight: 600;
  letter-spacing: -1.44px;
  color: white;
}
.stop1 {
  margin: 12px 0 32px;
  font-size: 20px;
  line-height: 28px;
  max-width: 620px;
  color: white;
}
.long {
  margin-top: 20px;
  background-image: url(https://mydukaan.io/images/download-app-banner.jpg);
  height: 400px;
}
.a {
  color: #4d4d4d;
  font-size: 18px;
  line-height: 26px;
}
.dot {
  font-size: 14px;
  line-height: 20px;
  color: grey;
}
.audi{
     margin-top: 24px;
    font-family: LibreBaskerville,GalanoGrotesque,san-serif;
    font-size: 25px;
    line-height: 28px;
    font-weight: 900;
}
.merchant{
    font-weight: 400;
    color: grey;
}
.santro{
  margin-top: 30px;
}
.short{
  margin-top: -50px;
}
li{
list-style:none;
margin-bottom: 16px;  
}
</style>
