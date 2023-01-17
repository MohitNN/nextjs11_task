import React, { useEffect } from "react";
import { Button, Modal, Checkbox, Form, Input, Space, DatePicker } from "antd";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { deleteEvent, storeEvents, updateEvent } from '../../redux/actions/EventAction';

const EventModal = ({ show, setShow, starting_date, setStartingDate, setEvent, event }) => {

  const dispatch = useDispatch()
  const [form] = Form.useForm()

  const onFinish = (values) => {
    let eventObj = { id: event.show ? event.info.id : uuidv4(), title: values.title, start: starting_date, end: moment(values.ending_date.$d).add('00:00:00', "LTS").format() }
    if (event.show == true) { dispatch(updateEvent(event.info, eventObj, setShow, form, setStartingDate)) }
    else dispatch(storeEvents(eventObj, setShow, form, setStartingDate))
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleDelete = () => {
    
    dispatch(deleteEvent(event.info, setEvent, setShow, form, setStartingDate))
  }
  const handleOk = () => {
    alert();
  };

  useEffect(() => {
    if (event.show) {
      setStartingDate(event.info.start)
      form.setFieldsValue({
        title: event.info.title,
        ending_date: moment(event.info.end),
      });
    }
  }, [event.show])

  return (
    <>
      <Modal
        title="Add Event"
        open={show}
        onOk={handleOk}
        footer={null}
        // confirmLoading={confirmLoading}
        onCancel={() => { setShow(false); setEvent({ show: false, info: {} }) }}
      >
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          form={form}
        >
          <Form.Item
            label="Title"
            name="title"
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 16,
            }}
            rules={[
              {
                required: true,
                message: "enter event title",
              },
            ]}
          >
            <Input />
          </Form.Item>

          {/* <Form.Item
            label="Start date"
            name="start_date"
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 16,
            }}
            rules={[
              {
                type: "object",
                required: true,
                message: "enter starting date of an event!",
              },
            ]}
          >
            <DatePicker />
          </Form.Item> */}

          <Form.Item
            label="Ending date"
            name="ending_date"
            labelCol={{
              span: 6,
            }}
            wrapperCol={{
              span: 16,
            }}
            rules={[
              {
                type: "object",
                required: true,
                message: "enter ending date of an event!",
              },
            ]}
          >
            <DatePicker
              disabledDate={(current) => {
                return moment(starting_date).add(0, "days") >= current || moment().add(0, "days") >= current;
              }}
            />
          </Form.Item>
          {/* <div style={{display:"flex"}}> */}
          <Space wrap style={{ justifyContent: "end", width: "100%" }}>
            {" "}
            <Form.Item
              wrapperCol={{
                offset: 0,
              }}
            >
              <Button
                type="primary"
                htmlType="button"
                danger
                onClick={() => { event.show ? handleDelete() : setShow(false) }}
              >
                {event.show ? 'Delete' : 'Cancel'}
              </Button>
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 0,
              }}
            >
              <Button type="primary" htmlType="submit">
                {event.show ? 'Update' : 'Add'}
              </Button>
            </Form.Item>
          </Space>

          {/* </div> */}
        </Form>
      </Modal>
    </>
  );
};

export default EventModal;
