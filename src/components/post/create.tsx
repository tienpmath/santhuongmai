"user client";
import { addQuery } from "@/app/actions/AddQuery";

import axios from "axios";
import { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "@radix-ui/react-dropdown-menu";

const fileTypes = ["JPG", "JPEG", "PNG", "GIF"];
const CreatePostComponent = (prop: any) => {
  //console.log(prop);
  const [data, setData] = useState();
  const receivedDataHandler = (data: any) => {
    setData(data);
  };
  const [file, setFile] = useState(null);
  const [urlImage, setUrlImages] = useState("");

  const handleChange = async (file: any) => {
    setFile(file);
    const formData = new FormData();
    var i = 0;
    for (const uploadedFile of file) {
      //make a bew FormData for every file.
      formData.append("ImageFile", file[i]);
      i++;
    }
    //console.log(formData)
    try {
      const res = await axios.post(
        "https://file.raovatlamdong.vn/addImages",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
          },
        }
      );
      setUrlImages(res.data);

      //props.sendDataToParent(res)
    } catch (ex) {
      console.log(ex);
    }
  };
  //const [dataUser, setDataUser] = useState<ApplicationConfigurationDto>()
  useEffect(() => {
    (async () => {
      // const appConfig = await abpApplicationConfigurationGet();
      // setDataUser(appConfig);
    })();
  }, []);
  // console.log(useCurrentUser)

  return (
    <>
      {1 ? (
        <div className="container">
          <div className="mb-5">
            <pre>{JSON.stringify(prop.info.user, null, 2)}</pre>
          </div>
          <hr />
          <FileUploader
            label="Upload hình ảnh ! Tối đa 5 hình"
            active="true"
            handleChange={handleChange}
            name="file"
            types={fileTypes}
            multiple={true}
            onSizeError="false"
            onTypeError="false"
          />
          <h2>Các file Ảnh đã Upload: {urlImage}</h2>
          <hr />
          <form className="space-y-8" action={addQuery} method="POST">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  id="categoryId"
                  htmlFor="categoryId"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Chọn Danh Mục
                </label>
                <select
                  name="categoryId"
                  id="categoryId"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value={1} selected>
                    Đà Lạt
                  </option>
                  <option value={2}>Đức Trọng</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <div>
                <label
                  id="locationId"
                  htmlFor="locationId"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Chọn Danh Mục
                </label>
                <select
                  name="locationId"
                  id="locationId"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value={1} selected>
                    Bất động sản
                  </option>
                  <option value={2}>Việc làm</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label>Nhập tiêu đề *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                defaultValue=""
                required
                placeholder="Tiêu đề"
              />
            </div>{" "}
            <div className="grid w-full items-center gap-1.5">
              {" "}
              <Label>Nhập mô tả chi tiết * </Label>
              <Textarea
                id="description"
                name="description"
                defaultValue=""
                required
                placeholder="Mô tả"
              />{" "}
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label>Nhập giá * | Nhập 0 là thương lượng giá</Label>
              <Input
                id="price"
                type="number"
                name="price"
                defaultValue="0"
                required
                placeholder="giá"
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label>Nhập số điện thoại * </Label>
              <Input
                id="phone"
                type="number"
                name="phone"
                defaultValue={0}
                required
                placeholder="Số điện thoại"
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label>Nhập địa chỉ liên hệ * </Label>
              <Input
                id="address"
                type="text"
                defaultValue=""
                required
                name="address"
                placeholder="Địa chỉ liên hệ * "
              />{" "}
            </div>
            <Input
              id="seller"
              type="hidden"
              name="seller"
              value={prop.info.user.sub}
              required
              readOnly
              placeholder="Người bán"
            />
            <Input
              id="Email"
              type="hidden"
              name="Email"
              value={prop.info.user.email}
              required
              readOnly
              placeholder="Email"
            />
            <Input id="image" name="image" type="hidden" value={urlImage} />
            <Button type="submit">Đăng bài ngay - Miễn phí !</Button>
          </form>
        </div>
      ) : (
        <h2>Bạn chưa đăng nhập ? vui lòng đăng nhập nhé</h2>
      )}
    </>
  );
};

export default CreatePostComponent;
