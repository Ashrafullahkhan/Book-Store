import React from "react";
import { Button, StyleSheet, Image, Text } from "react-native";
import AppTextInput from "../Components/AppTextInput";
import Screen from "../Components/Screen";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("password"),
});

function Login(props) {
  return (
    <Screen padding={15}>
      <Image style={styles.image} source={require("../assets/books.png")} />

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <AppTextInput
              onChangeText={handleChange("email")}
              icon="email"
              autoCapitalize="false"
              keyboardType="email-address"
              placeholder="Username"
            ></AppTextInput>
            <Text style={{ color: "red" }}>{errors.email}</Text>
            <AppTextInput
              icon="lock"
              onChangeText={handleChange("password")}
              placeholder="Password"
            ></AppTextInput>
            <Text style={{ color: "red" }}>{errors.password}</Text>
            <Button onPress={handleSubmit} title="Login"></Button>
            <Text style={{ marginTop: 5, alignSelf: "flex-end" }}>
              Already Have an Account
            </Text>
          </>
        )}
      </Formik>
    </Screen>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    marginTop: 40,
    marginBottom: 60,
    alignSelf: "center",
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "dodgerblue",
  },
  container: {
    padding: 90,
  },
});
export default Login;
