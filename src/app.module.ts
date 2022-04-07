import { roles } from "@common/constants/app.roles";
import { NestConfigModule } from "@lib/config/config.module";
import { NestI18nModule } from "@lib/i18n/i18n.module";
import { OrmModule } from "@lib/orm/orm.module";
import { NestPinoModule } from "@lib/pino/pino.module";
import { AuthModule } from "@modules/auth/auth.module";
import { PostModule } from "@modules/post/post.module";
import { UserModule } from "@modules/user/user.module";
import { Module } from "@nestjs/common";
import { ServeStaticModule } from "@nestjs/serve-static";
import { AccessControlModule } from "nest-access-control";
import { join } from "path";

@Module({
	imports: [
		AuthModule,
		UserModule,
		PostModule,
		OrmModule,
		NestConfigModule,
		NestPinoModule,
		NestI18nModule,
		AccessControlModule.forRoles(roles),
		ServeStaticModule.forRoot({
			rootPath: join(__dirname, "resources"),
			serveStaticOptions: {
				maxAge: 86_400, // 1 day
			},
		}),
	],
})
export class AppModule {}