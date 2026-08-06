import { apiClient } from "./client";

export type CustomerNotification = {
  id: string;
  organizationId: string;
  workspaceId: string | null;

  category: string;
  severity: string;
  title: string;
  message: string;

  sourceEventType: string;
  sourceEntityType: string;
  sourceEntityId: string | null;

  createdAt: string;
};

export type CustomerNotificationList = {
  organizationId: string;
  workspaceId: string | null;
  supportsReadState: boolean;
  unreadCount: number | null;
  notifications: CustomerNotification[];
};

type CustomerNotificationApiResponse = {
  id: string;
  organization_id: string;
  workspace_id: string | null;

  category: string;
  severity: string;
  title: string;
  message: string;

  source_event_type: string;
  source_entity_type: string;
  source_entity_id: string | null;

  created_at: string;
};

type CustomerNotificationListApiResponse = {
  organization_id: string;
  workspace_id: string | null;
  supports_read_state: boolean;
  unread_count: number | null;
  notifications: CustomerNotificationApiResponse[];
};

function mapNotification(
  notification: CustomerNotificationApiResponse,
): CustomerNotification {
  return {
    id: notification.id,
    organizationId: notification.organization_id,
    workspaceId: notification.workspace_id,

    category: notification.category,
    severity: notification.severity,
    title: notification.title,
    message: notification.message,

    sourceEventType: notification.source_event_type,
    sourceEntityType: notification.source_entity_type,
    sourceEntityId: notification.source_entity_id,

    createdAt: notification.created_at,
  };
}

export async function listCustomerNotifications(): Promise<
  CustomerNotificationList
> {
  const response =
    await apiClient.get<CustomerNotificationListApiResponse>(
      "/customer/notifications",
    );

  return {
    organizationId: response.data.organization_id,
    workspaceId: response.data.workspace_id,
    supportsReadState:
      response.data.supports_read_state,
    unreadCount: response.data.unread_count,
    notifications: response.data.notifications.map(
      mapNotification,
    ),
  };
}
