import Notification from "../models/notification.model";
import { NotificationCreationAttributes } from "../models/notification.model";

export const createNotification = async (
  data: NotificationCreationAttributes
) => {
  return await Notification.create(data);
};

export const getUserNotifications = async (userId: string) => {
  return await Notification.findAll({ where: { userId } });
};

export const markAsRead = async (id: string) => {
  return await Notification.update({ isRead: true }, { where: { id } });
};
