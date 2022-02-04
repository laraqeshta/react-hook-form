import React from 'react';
import {Input , Button , Form , Select , Typography , Cascader , Checkbox} from 'antd';
import {useForm , Controller} from 'react-hook-form';

//style
import './FormController.css';

//constant
const {Text , Title} = Typography;
const {Option} = Select;
const residences = [
    {
        value: 'name' ,
        label : 'name' ,
        children : [
            {
                value:'cdscf',
                label: 'cdscf',
                children : [
                    {
                    value :'vfvfv',
                    label : 'vfvfv',
                    },
                ],
            },
        ],
    },

    {
        value : 'jnhgn' ,
        label : 'jnhgn' ,
        children : [
            {
                value : 'nggfhg' ,
                label : 'Nggfhg' , 
                children : [
                    {
                        value :'zcder',
                        label : 'Zcder',
                    },
                ],
            },
        ],

    },
];

const FormController = () => {

    const {control , watch , handelSubmit} = useForm();

    const submit = data => console.log(data);
    const currentValue = watch();
    console.log("🚀 ~ file: FormThree.jsx ~ line 12 ~ FormThree ~ currentValues", currentValue);

    const prefixSelsctor = (
         <Controller 
            name='countryKey'
            control={control}
            render = { ({field}) => (
                <Select {...field}>
                    <Option value="86">+86</Option>
                    <Option value="87">+87</Option>
                    <Option value="86">+972</Option>
                </Select>
            )} 

         />
    );

    return(
        <div className='container'>
            <Title>Register your account</Title>
            <Form className='form' onSubmitCapture={handelSubmit(submit)}>

                <div className='input-cell'>
                <Text className='label'>Email :</Text>
                    <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                            <Input
                                placeholder='eg: example@gmail.com'
                                type="email"
                                {...field}
                            />
                        )}
                    />
                </div>
                <div className='input-cell' >
                    <Text className='label'>Password :</Text>
                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => (
                            <Input.Password
                                placeholder='password'
                                type={"password"}
                                {...field}
                            />
                        )}
                    />
                </div>
                <div className='input-cell' >
                    <Text className='label'>Confirm Password :</Text>
                    <Controller
                        name="confirmPassword"
                        control={control}
                        render={({ field }) => (
                            <Input.Password
                                placeholder='confirm password'
                                type={"password"}
                                {...field}
                            />
                        )}
                    />
                </div>
                <div className='input-cell' >
                    <Text className='label'>Nick name :</Text>
                    <Controller
                        name="nickName"
                        control={control}
                        render={({ field }) => (
                            <Input
                                placeholder='eg: linda'
                                {...field}
                            />
                        )}
                    />
                </div>
                <div className='input-cell' >
                    <Text className='label'>Habitual Residence" :</Text>
                    <Controller
                        name="habitualResidence"
                        control={control}
                        render={({ field }) => (
                            <Cascader
                                options={residences}
                                {...field}
                            />
                        )}
                    />
                </div>
                <div className='input-cell' >
                    <Text className='label'>Phone Number :</Text>
                    <Controller
                        name="phoneNumber"
                        control={control}
                        render={({ field }) => (
                            <Input
                                placeholder='50888888'
                                addonBefore={prefixSelector}
                                {...field}
                            />
                        )}
                    />
                </div>
                <div className='input-cell' >
                    <Controller
                        name="agreement"
                        control={control}
                        render={({ field }) => (
                            <Checkbox {...field}>
                                I have read the <a href="">agreement</a>
                            </Checkbox>
                        )}
                    />

                </div>
                <Button className='submit' type="primary" htmlType='submit'>
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default FormController;