"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { DynamicIcon } from "lucide-react/dynamic";

import Box from "root/components/ui/Box/Index";
import Flex from "root/components/ui/Flex/Index";
import Badge from "root/components/ui/Badge/Index";
import Button from "root/components/ui/Button/Index";

const Consultation = () => {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: "5vh" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: "all" }}
    >
      <Box space="lg">
        <h3 className="text-xl font-vazir-black">راهنمایی میخواهید؟ تیکت بزنید</h3>
        <p className="mt-3">
          معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا
          صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در
          آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از
          آنجایی که طراحان عموما نویسنده متن نیستند
        </p>
        <Flex className="mt-3">
          <Badge>
            <DynamicIcon className="compatible-icon-size" name="check" />
            <span>مشاوره</span>
          </Badge>
          <Badge>
            <DynamicIcon className="compatible-icon-size" name="check" />
            <span>مسیر یادگیری</span>
          </Badge>
          <Badge>
            <DynamicIcon className="compatible-icon-size" name="check" />
            <span>همکاری</span>
          </Badge>
        </Flex>
        <Link href={"/"} className="mt-3">
          <Button>
            <span>تیکت بزنید</span>
            <DynamicIcon className="compatible-icon-size -scale-x-100" name="send-horizonal" />
          </Button>
        </Link>

        <Flex className="mt-3" justify="end">
          <Link href={"/"}>
            <Button shape="ghost">
              <span>متنی برای راه های ارتباط با ما</span>
              <DynamicIcon className="compatible-icon-size" name="arrow-left" />
            </Button>
          </Link>
        </Flex>
      </Box>
    </motion.div>
  );
};

export default Consultation;
