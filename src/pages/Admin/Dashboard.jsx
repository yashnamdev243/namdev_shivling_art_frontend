import { Link } from "react-router-dom";
import { Card, Progress, Button, Avatar } from "antd";
import { motion } from "framer-motion";

import {
  FiPackage,
  FiGrid,
  FiAlertTriangle,
  FiPlus,
  FiArrowRight,
} from "react-icons/fi";

import { AppstoreOutlined, PlusOutlined } from "@ant-design/icons";

import Seo from "../../components/common/Seo";
import Loader from "../../components/common/Loader";
import AdminHeader from "../../components/admin/AdminHeader";
import StatCard from "../../components/admin/StatCard";

import { useDashboardStats } from "../../hooks/useDashboardStats";
import { useProducts } from "../../hooks/useProducts";

import { ROUTES } from "../../config/routes";
import { formatCurrency } from "../../utils/format";
import { FILE_BASE_URL } from "../../config/api";

const statCards = (stats) => [
  {
    title: "Products",
    value: stats?.totalProducts || 0,
    icon: <FiPackage size={24} />,
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "Categories",
    value: stats?.totalCategories || 0,
    icon: <FiGrid size={24} />,
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "Out of Stock",
    value: stats?.outOfStock || 0,
    icon: <FiAlertTriangle size={24} />,
    color: "from-red-500 to-pink-500",
  },
];

export default function Dashboard() {
  const { data: stats, isLoading } = useDashboardStats();

  const { data, isLoading: loadingProducts } = useProducts({
    limit: 5,
  });

  const products = data?.products || data?.data || data || [];

  if (isLoading) return <Loader />;

  return (
    <>
      <Seo title="Dashboard" />

      <AdminHeader
        title="Dashboard"
        description="Manage your products & inventory"
        actions={
          <Link to={ROUTES.adminProducts}>
            <Button
              type="primary"
              size="large"
              icon={<PlusOutlined />}
              className="rounded-xl"
            >
              Add Product
            </Button>
          </Link>
        }
      />

      {/* Welcome */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 overflow-hidden rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 p-8 text-white"
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">Welcome Back 👋</h2>

            <p className="mt-2 opacity-90">
              Manage products, categories and inventory easily.
            </p>
          </div>

          <Avatar
            size={70}
            className="bg-white text-orange-600"
            icon={<AppstoreOutlined />}
          />
        </div>
      </motion.div>

      {/* Stats */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {statCards(stats).map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <StatCard
              label={item.title}
              value={item.value}
              icon={
                <div
                  className={`rounded-xl bg-gradient-to-r ${item.color} p-3 text-white`}
                >
                  {item.icon}
                </div>
              }
            />
          </motion.div>
        ))}
      </div>

      {/* Grid */}

      <div className="mt-8 grid gap-6 xl:grid-cols-3">
        {/* Products */}

        <Card
          className="rounded-3xl xl:col-span-2"
          title="Recently Added Products"
          extra={
            <Link
              to={ROUTES.adminProducts}
              className="flex items-center gap-1 text-brand-600"
            >
              View All
              <FiArrowRight />
            </Link>
          }
        >
          {loadingProducts ? (
            <Loader />
          ) : products.length === 0 ? (
            <div className="py-10 text-center text-gray-400">
              No Products Found
            </div>
          ) : (
            <div className="space-y-4">
              {products.map((item) => (
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  key={item.id}
                  className="flex items-center rounded-2xl border p-3 transition hover:shadow-lg"
                >
                  <img
                    src={
                      item.image
                        ? `${FILE_BASE_URL}/uploads/${item.image}`
                        : "https://placehold.co/80"
                    }
                    className="h-16 w-16 rounded-xl object-cover"
                    alt=""
                  />

                  <div className="ml-4 flex-1">
                    <h4 className="font-semibold">{item.name}</h4>

                    <p className="text-sm text-gray-500">{item.category}</p>
                  </div>

                  <div className="text-right">
                    <div className="font-bold text-amber-600">
                      {formatCurrency(item.price)}
                    </div>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        item.stock > 0
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {item.stock > 0 ? `${item.stock} Stock` : "Out of Stock"}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </Card>

        {/* Right Side */}

        <div className="space-y-6">
          <Card title="Inventory Health" className="rounded-3xl">
            <Progress
              percent={
                stats?.totalProducts
                  ? Math.round(
                      ((stats.totalProducts - stats.outOfStock) /
                        stats.totalProducts) *
                        100,
                    )
                  : 0
              }
              strokeColor="#16a34a"
            />

            <p className="mt-4 text-gray-500">Stock Availability</p>
          </Card>

          <Card title="Quick Actions" className="rounded-3xl">
            <div className="flex flex-col gap-4">
              <Link to={ROUTES.adminProducts}>
                <Button icon={<FiPlus />} block size="large" type="primary">
                  Add Product
                </Button>
              </Link>

              <Link to={ROUTES.adminProducts}>
                <Button icon={<FiPackage />} block size="large">
                  Manage Products
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
